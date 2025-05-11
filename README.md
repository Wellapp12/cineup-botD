# CineUp Bot

Bot de atendimento para WhatsApp usando Node.js e Twilio.

## Como rodar

1. Instale as dependências:
   ```
   npm install
   ```
2. Crie um arquivo `.env` com suas credenciais do Twilio (veja `.env.example`).
3. Inicie o servidor:
   ```
   npm start
   ```
4. Use o ngrok para expor sua porta local:
   ```
   ngrok http 3000
   ```
5. Cole a URL do ngrok + `/whatsapp` no campo "When a message comes in" do Twilio Sandbox.

## Fluxo do Bot

- Saudação inicial
- Opções de menu (filmes, horários, atendente)
- Respostas automáticas

---
