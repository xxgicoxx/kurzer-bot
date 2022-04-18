class HelpService {
  async help(bot, chat) {
    try {
      let message = '<b>I can help you shorten url.\n\nYou can control me by sending these commands:\n\n</b>';
      const commands = [
        { command: '/short <b>{url}</b>', description: 'Short URL' },
        { command: '/help', description: 'Help' },
      ];

      commands.forEach((command) => {
        message += `${command.command} - ${command.description}\n`;
      });

      await bot.sendMessage(chat.id, message, { parse_mode: 'html' });
    } catch (error) {
      console.error(error);

      await bot.sendMessage(chat.id, 'Error, try again later');
    }
  }
}

module.exports = HelpService;
