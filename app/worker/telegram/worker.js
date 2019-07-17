const auth = require('../../config/auth.js');
const telegram = require('telegram-node-bot');
const telegramBaseController = telegram.TelegramBaseController
const textCommand = telegram.TextCommand
const chatbot = new telegram.Telegram(auth.telegram.TOKEN);
const kurzerurl = require('kurzer-url');

class EventsController extends telegramBaseController {
    startAction(scope) {
      scope.sendMessage(`Hello, ${scope.message.from.firstName}`);
    }

    shortAction(scope) {
        let url = scope.message.text.replace('/short', '');
        kurzerurl.short(url).then((response) => {
          scope.sendMessage(response);
        }).catch((error) => {
          scope.sendMessage(error);
        });
    }
    
    get routes() {
      return {
        'start': 'startAction',
        'short': 'shortAction'
      }
    }
}

chatbot.router.when(new textCommand('/start', 'start'), new EventsController()).when(new textCommand('/short', 'short'), new EventsController());
              