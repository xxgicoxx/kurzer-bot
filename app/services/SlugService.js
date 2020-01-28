const slug = require('slug.js');

class SlugService {
  slug(scope) {
    const text = scope.message.text.replace('/slug', '');
    scope.sendMessage(slug(text));
  }
}

module.exports = SlugService;
