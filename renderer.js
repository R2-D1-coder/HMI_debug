var fs = require("fs");

var filePath =
  "D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/";

fs.watch(filePath, function (event, filename) {
      console.log('event is: ' + event);
      if (filename) {
         console.log('filename provided: ' + filename);
        //readTxt();
      } else {
        console.log('filename not provided');
      }
  }
);
console.log(filePath + ' 被监听中...');

