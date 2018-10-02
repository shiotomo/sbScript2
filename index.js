const { CronJob } = require('cron');
const backup = require('./src/backup.js');

backup.start();
// new CronJob('* * * * * *', () => {
//   backup.copyDir();
//   // console.log('Hello');
// }, null, true);