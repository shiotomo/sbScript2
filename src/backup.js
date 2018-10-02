require('dotenv').config();
const fs = require('fs-extra');
const copyDir = require('copy-dir');

exports.start = function() {
  if (!fs.exists('backup')) {
    fs.mkdir('backup', (err) => {
      console.log(err);
    });
  }

  fs.readFile('./backup-list.txt', 'utf-8', (error, text) => {
    copyDir(text, process.env.BACKUP_DIR, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Compleate backup !!');
      }
    });
  });
}