const {CronJob} = require('cron');
const backup = require('./src/backup.js');

new CronJob('* * * * * *', () => {
  // backup.copyDir();
  console.log('Hello');
}, null, true);