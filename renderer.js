var fs = require("fs");
var buf = new Buffer.alloc(1024);

window.setInterval(function () {
console.log("准备打开文件！");
fs.open(
  "D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-174048.txt",
  "r+",
  function (err, fd) {
    if (err) {
      return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件！");
    fs.close(fd, function (err) {
      if (err) {
        console.log(err);
      }
      console.log("文件关闭成功");
    });
  }
);
}, 3000);

