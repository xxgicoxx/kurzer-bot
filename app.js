const { TextCommand, Telegram } = require('telegram-node-bot');

const { MessageController, ShortController, SlugController } = require('./app/controllers');

const { telegramConfig } = require('./app/configs');

const bot = new Telegram(telegramConfig.token, {
  webAdmin: {
    port: 7771,
    host: 'localhost',
  },
  workers: 1,
});

bot.router
  .when(new TextCommand('/start', 'start'), new MessageController())
  .when(new TextCommand('/short', 'short'), new ShortController())
  .when(new TextCommand('/slug', 'slug'), new SlugController())
  .when(new TextCommand('/help', 'help'), new MessageController())
  .otherwise(new MessageController());
