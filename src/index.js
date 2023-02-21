const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (message) => {
    let chat_id = message.from.id;
    bot.sendMessage(chat_id, 'Peace, I am I/O!');
});