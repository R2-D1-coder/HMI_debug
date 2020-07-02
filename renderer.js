// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const fs = require('fs');
const readLine = require("readline");
//fs.readFileSync(new URL('file:///D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200701-155146.txt'));

window.setInterval(function () {
    let data = fs.readFileSync('./hello.txt', 'utf-8');
    console.log(data); 
}, 2000);



// function readFileToArr(fileName, callback) {

//     var arr = [];
//     var readObj = readLine.createInterface({
//         input: fs.createReadStream(fileName)
//     });

//     // 一行一行地读取文件
//     readObj.on('line', function (line) {
//         arr.push(line);
//     });
//     // 读取完成后,将arr作为参数传给回调函数
//     readObj.on('close', function () {
//         callback(arr);
//     });
// }

// // 读取数据后,处理完成后放入outpu.txt
// readFileToArr('./test.txt', function (arr) {
//     // 通过回调得到的,按行获得的数据
//     console.log(arr);

//     var tempArr = [];

//     arr.forEach((ele) => {
//         tempArr.push("b." + ele + " as hc_" + ele);
//     });
//     fs.writeFile('./output.txt', tempArr.join("\n"),
//         function (err) {
//             if (err) throw err; 
//         });
// });