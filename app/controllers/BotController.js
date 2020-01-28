const telegram = require('telegram-node-bot');

const MessageService = require('../services/MessageService');
const ShortService = require('../services/ShortService');
const SlugService = require('../services/SlugService');

const telegramConfig = require('../configs/telegram');

const { TelegramBaseController } = telegram;
const { TextCommand } = telegram;
const bot = new telegram.Telegram(telegramConfig.token, {
  webAdmin: {
    port: 7771,
    host: 'localhost',
  },
  workers: 1,
});

const messageService = new MessageService();
const shortService = new ShortService();
const slugService = new SlugService();

class BotController extends TelegramBaseController {
  async handle(scope) {
    messageService.hanlde(scope);
  }

  async start(scope) {
    messageService.start(scope);
  }

  async short(scope) {
    shortService.short(scope);
  }

  async slug(scope) {
    slugService.slug(scope);
  }

  async help(scope) {
    messageService.help(scope);
  }

  get routes() {
    return {
      start: 'start',
      short: 'short',
      slug: 'slug',
      help: 'help'
    };
  }
}

bot.router
  .when(new TextCommand('/start', 'start'), new BotController())
  .when(new TextCommand('/short', 'short'), new BotController())
  .when(new TextCommand('/slug', 'slug'), new BotController())
  .when(new TextCommand('/help', 'help'), new BotController())
  .otherwise(new BotController());
