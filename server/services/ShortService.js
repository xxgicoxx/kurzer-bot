const Kurzer = require('kurzer-url');
const EhUrl = require('eh-url');

const kurzer = new Kurzer();
const ehUrl = new EhUrl();

class ShortService {
  async short(bot, chat, url) {
    try {
      const validUrl = await ehUrl.check(url);

      if (!validUrl) {
        await bot.sendMessage(chat.id, 'Invalid URL');
      } else {
        const shortened = await kurzer.short(url);

        await bot.sendMessage(chat.id, this.getMessage(shortened));
      }
    } catch (error) {
      console.error(error);
    }
  }

  getMessage(shortened) {
    if (shortened.errorcode && shortened.errorcode <= 2) {
      return shortened.errormessage;
    }

    if (shortened.errorcode && shortened.errorcode > 2) {
      return 'Error, try again later';
    }

    return shortened.shorturl;
  }
}

module.exports = ShortService;
