const chalk = require('chalk');

const getTimestamp = () => new Date().toISOString().split('T')[1].split('.')[0];

function logInfo(tag, message) {
    console.log(`${chalk.gray(getTimestamp())} ${chalk.blue(`[${tag}]`)} ${message}`);
}

function logSuccess(tag, message) {
    console.log(`${chalk.gray(getTimestamp())} ${chalk.green.bold(`[${tag}]`)} ${message}`);
}

function logError(tag, message) {
    console.log(`${chalk.gray(getTimestamp())} ${chalk.red(`[${tag}]`)} ${message}`);
}

module.exports = { logInfo, logSuccess, logError };
