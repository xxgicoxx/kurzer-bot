const kurzer = require('kurzer-url');
const ehUrl = require('eh-url');

class ShortService {
  async short($) {
    try {
      const url = $.message.text.replace('/short', '').trim();

      if (!url) {
        $.sendMessage('URL must not be empty');
      } else {
        const validUrl = await ehUrl(url);

        if (!validUrl) {
          $.sendMessage('Invalid URL');
        } else {
          const shortenedUrl = await kurzer(url);

          $.sendMessage(shortenedUrl);
        }
      }
    } catch (ex) {
      console.error(ex);

      $.sendMessage('Error, try again later');
    }
  }
}

module.exports = ShortService;
