var fs = require("fs");

var filename =
  "D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-194248.txt";
window.setInterval(function () {
  console.log("准备打开文件！");
  fs.open(filename, "r+", function (err, fd) {
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
  });
}, 3000);


const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream(filename, {
    enconding: "utf8",
  }),
  output: null,
});

rl.on("readline", function (line) {
  console.log("got line content:%s", line);
});

function readFile() {
  var readline = require("readline");
  var rl = readline.createInterface({
    input: fs.createReadStream(filename, {
      enconding: "utf8",
    }),
    output: null,
  });

  rl.on("readline", function (line) {
    console.log("got line content:%s", line);
  });
}

// window.onload = function(){
//       readFile();
//     };

const process_crash = document.getElementById("process-crash");

process_crash.addEventListener("click", () => {
 // readFile();
});
