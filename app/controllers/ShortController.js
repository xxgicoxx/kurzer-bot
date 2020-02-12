const { TelegramBaseController } = require('telegram-node-bot');

const { ShortService } = require('../services');

const shortService = new ShortService();

class ShortController extends TelegramBaseController {
  async short($) {
    shortService.short($);
  }

  get routes() {
    return {
      short: 'short',
    };
  }
}

module.exports = ShortController;
