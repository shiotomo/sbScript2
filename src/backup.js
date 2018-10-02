require('dotenv').config();
require('date-utils');
const fs = require('fs-extra');
const copyDir = require('copy-dir');

// バックアップをスタートするメソッド
exports.start = function() {
  const backupDirectory = createDirctory();

  // backup-list.txtに記述されたパス先のディレクトリorファイルをバックアップ
  fs.readFile('./backup-list.txt', 'utf-8', (error, text) => {
    if (error) {
      console.log(error);
    } else {
      backup(text, backupDirectory);
    }
  });
}

function createDirctory() {
  const now = new Date();
  const backupDirectory = process.env.BACKUP_DIR + '/backup-time' + now.toFormat('YYYY-MM-DD_HH:MI:SS');
  // バックアップ先のディレクトリの存在を確認
  // なければディレクトリを作成する
  if (!fs.exists(backupDirectory)) {
    fs.mkdir(backupDirectory, (err) => {
      console.log(err);
    });
  }

  return backupDirectory;
}

// バックアップを実行するメソッド
function backup(text, backupDirectory) {
  copyDir(text, backupDirectory, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Compleate backup !!');
    }
  });
}