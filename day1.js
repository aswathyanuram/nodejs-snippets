const chalk = require("chalk");

const DEBUG = "Debug";
const INFO = "Info";
const ERROR = "Error";

function logger(type = "MESSAGE") {
  let date = new Date().toUTCString();
  return function (data) {
    switch (type) {
      case DEBUG:
        console.log(chalk.cyan(`${type}-${date}-${data}`));
        break;
      case INFO:
        console.log(chalk.yellow(`${type}-${date}-${data}`));
        break;
      case ERROR:
        console.log(chalk.red(`${type}-${date}-${data}`));
        break;
      default:
        console.log(chalk.white(`${type}-${date}-${data}`));
    }
  };
}

let APP_LOGGER = {
  message: logger(),
  info: logger(INFO),
  debug: logger(DEBUG),
  error: logger(ERROR),
};

APP_LOGGER.message("Jeeva");
APP_LOGGER.error("An Error occured");
