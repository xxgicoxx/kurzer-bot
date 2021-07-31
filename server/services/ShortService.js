const kurzer = require('kurzer-url');
const ehUrl = require('eh-url');

class ShortService {
  async short(bot, chat, url) {
    try {
      const validUrl = await ehUrl(url);

      if (!validUrl) {
        await bot.sendMessage(chat.id, 'Invalid URL');
      } else {
        const shortened = await kurzer(url);

        await bot.sendMessage(chat.id, shortened);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ShortService;
