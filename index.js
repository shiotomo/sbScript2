require('dotenv').config();
const { CronJob } = require('cron');
const backup = require('./src/backup.js');
const message = require('./src/message.js');

message.startUp();
new CronJob(process.env.BACKUP_INTERVAL, () => {
  backup.start();
}, null, true);