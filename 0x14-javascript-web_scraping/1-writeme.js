#!/usr/bin/node

const fs = require('fs');

fs.writeFile(process.argv[2], process.argv[3], 'utf8', function (err) {
  if (err) {
    console.log(err);
  }else {
    console.log('Files written successfully');
}
});
