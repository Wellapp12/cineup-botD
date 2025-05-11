require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

function cineupBot(msg) {
  msg = msg.trim().toLowerCase();

  if (msg === 'oi' || msg === 'olá' || msg === 'ola') {
    return `🎬 Olá! Eu sou o CineUp Bot. Como posso ajudar?
1️⃣ Ver filmes em cartaz
2️⃣ Horários das sessões
3️⃣ Falar com atendente`;
  }
  if (msg === '1' || msg.includes('filme')) {
    return '🎥 Os filmes em cartaz são:\n- Duna 2\n- Godzilla x Kong\n- Garfield\n\nResponda 2 para ver horários.';
  }
  if (msg === '2' || msg.includes('horário')) {
    return '🕒 Horários das sessões:\n- Duna 2: 18h, 21h\n- Godzilla x Kong: 17h, 20h\n- Garfield: 16h, 19h';
  }
  if (msg === '3' || msg.includes('atendente')) {
    return '👤 Um atendente irá falar com você em instantes!';
  }
  return 'Desculpe, não entendi. Por favor, responda com o número da opção desejada.';
}

app.post('/whatsapp', (req, res) => {
  const twiml = new MessagingResponse();
  const msg = req.body.Body || '';

  twiml.message(cineupBot(msg));

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CineUp Bot rodando na porta ${PORT}`);
});
