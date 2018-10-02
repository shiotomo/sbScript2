require('dotenv').config();

const fs = require('fs-extra');

exports.copyDir = () => {
  // とりあえずhogeディレクトリをpiyoディレクトリにコピーするようにしている
  // 将来的にここを変更
  fs.readFile('./backup-list.txt', 'utf-8', (err, text) => {
    // fs.copySync('./' + process.env.BACKUP_DIR, './piyo');
    console.log(text);
  });
  // console.log(process.env.BACKUP_DIR);
}