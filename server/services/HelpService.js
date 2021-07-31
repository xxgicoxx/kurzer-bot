class HelpService {
  async help(bot, chat) {
    try {
      let message = '<b>Commands:</b>\n';
      const commands = await this.commands();

      commands.forEach((command) => {
        message += `${command.command} - ${command.description}\n`;
      });

      await bot.sendMessage(chat.id, message, { parse_mode: 'html' });
    } catch (error) {
      console.error(error);
    }
  }

  async commands() {
    return [
      {
        command: '/short <b>url</b>',
        description: 'Short URL',
      }, {
        command: '/help',
        description: 'Help',
      },
    ];
  }
}

module.exports = HelpService;
