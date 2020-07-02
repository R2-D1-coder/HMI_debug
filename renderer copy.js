// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const fs = require("fs");
const read_line = require("readline");
//fs.readFileSync(new URL('file:///D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-152652.txt'));

// const readStream = fs.createReadStream(
//   "D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-170853.txt"
// );
var times = 0;
window.setInterval(function () {
  console.log("次数: " + times++);

//   fs.stat('D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-170853.txt', function (err, stats){
//     console.log(stats.isFile());         //true
//   });
  // 打开文件
  fs.open("D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-170853.txt", "r", function (err, fd) {
    if (err) {
      throw err;
    }
    console.log("open file success.");
  });

  setTimeout(function() {
    // 关闭文件
    fs.close(fd, function(err){
        if (err){
           console.log(err);
        } 
        console.log("文件关闭成功");
     });
 }, 1000);
}, 3000);


var fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("准备打开文件！");
fs.open('D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-170853.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件！");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // 关闭文件
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("文件关闭成功");
      });
   });
});