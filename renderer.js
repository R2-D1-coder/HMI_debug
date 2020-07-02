// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const fs = require("fs");
const read_line = require("readline");
//fs.readFileSync(new URL('file:///D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-152652.txt'));

const readStream = fs.createReadStream(
  "D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200701-155146.txt"
);

window.setInterval(function () {}, 5000);

const rl = read_line.createInterface({
  input: readStream,
});

rl.on("line", (line) => {
  console.log(`Line from file: ${line}`);
});

rl.on("close", (line) => {
  console.log("读取完毕！");
  readStream.destroy();
});
