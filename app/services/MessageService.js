class MessageService {
  async handle($) {
    try {
      const message = 'Command not found';

      $.sendMessage(message);
    } catch (ex) {
      console.error(ex);

      $.sendMessage('Error, try again later');
    }
  }

  async help($) {
    try {
      const message = 'I can help you short url and slug string.\n\nYou can control me by sending these commands:\n\n/short {URL} - short URL\n/slug {string} - slug string\n/help - command list';

      $.sendMessage(message);
    } catch (ex) {
      console.error(ex);

      $.sendMessage('Error, try again later');
    }
  }
}

module.exports = MessageService;
