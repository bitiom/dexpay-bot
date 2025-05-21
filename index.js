require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const paymentToken = match[1];
  const paymentUrl = `https://www.bitiom.ir/DexPayment/${paymentToken}`;

  bot.sendMessage(chatId, 'برای پرداخت کلیک کنید', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'پرداخت', url: paymentUrl }
        ]
      ]
    }
  });
});
