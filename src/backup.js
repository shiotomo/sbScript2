const fs = require('fs-extra');

exports.copyDir = () => {
  // とりあえずhogeディレクトリをpiyoディレクトリにコピーするようにしている
  // 将来的にここを変更
  fs.readFile('./backup-list.txt', 'utf-8', (err, text) => {
    console.log(text);
  });
  // fs.copySync('./hoge', './piyo');
}