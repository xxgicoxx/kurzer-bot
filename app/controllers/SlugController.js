const { TelegramBaseController } = require('telegram-node-bot');

const { SlugService } = require('../services');

const slugService = new SlugService();

class SlugController extends TelegramBaseController {
  async slug($) {
    slugService.slug($);
  }

  get routes() {
    return {
      slug: 'slug',
    };
  }
}

module.exports = SlugController;
