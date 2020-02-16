const slug = require('slug.js');

class SlugService {
  async slug($) {
    try {
      const string = $.message.text.replace('/slug', '');

      if (!string) {
        $.sendMessage('String must not be empty');
      } else {
        const sluggedString = await slug.slugify(string);

        $.sendMessage(sluggedString);
      }
    } catch (ex) {
      console.error(ex);

      $.sendMessage('Error, try again later');
    }
  }
}

module.exports = SlugService;
