const fs = require('fs-extra');

exports.copyDir = () => {
  // とりあえずhogeディレクトリをpiyoディレクトリにコピーするようにしている
  // 将来的にここを変更
  fs.copySync('./hoge', './piyo');
}