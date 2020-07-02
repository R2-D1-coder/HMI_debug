var fs = require("fs");

var filePath =
  "D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-213443.txt";

fs.open(filePath, "a+", function (error, fd) {
  var buffer;
  var remainder = null;
  fs.watchFile(
    filePath,
    {
      persistent: true,
      interval: 100,
    },
    function (curr, prev) {
      //console.log(curr);
      if (curr.mtime > prev.mtime) {
        //文件内容有变化，那么通知相应的进程可以执行相关操作。例如读物文件写入数据库等
        buffer = new Buffer(curr.size - prev.size); // 创建一个缓冲，长度为（当前文件大小-文件上一个状态的大小）
        fs.read(fd, buffer, 0, curr.size - prev.size, prev.size, function (
          err,
          bytesRead,
          buffer
        ) {
          //console.log(buffer.toString()); //新增加的内容
          console.log(curr.mtime);
        });
      } else {
        console.log("文件读取错误");
      }
    }
  );
});
