require('date-utils');

exports.startUp = function() {
  const now = new Date();
  console.log('== sbScript2 ==');
  console.log('=> ver 1.0    ');
  console.log('=> Server backup system.');
  console.log('=> Start up time: ' + now.toFormat('YYYY-MM-DD HH:MI:SS'));
  console.log('');
}