
//利用打开关闭文件更新被占用log文件****Start
var fs = require("fs");

var filename =
  "D:/debug/software/cleanbot_visualizer_release_mingw64/online_log/online_P7Log_String_20200702-194248.txt";
window.setInterval(function () {
  //console.log("准备打开文件！");
  fs.open(filename, "r+", function (err, fd) {
    if (err) {
      return console.error(err);
    }
    console.log("文件打开");
    //console.log("准备读取文件！");
    fs.close(fd, function (err) {
      if (err) {
        console.log(err);
      }
      //console.log("文件关闭成功");
    });
  });
}, 3000);
//利用打开关闭文件更新被占用log文件****End


const read_line = require("readline");

window.setInterval(function () {
  // 读取数据后,处理完成后放入outpu.txt
  readFileToArr(filename, function (arr) {
      // 通过回调得到的,按行获得的数据
     // console.log(arr);
      var tempArr = [];
      arr.forEach((ele) => {
          tempArr.push("b." + ele + " as hc_" + ele);
      });
      // fs.writeFile('./output.txt', tempArr.join("\n"),
      //     function (err) {
      //         if (err) throw err; 
      //     });
  });
}, 5000);

var num=0;
function readFileToArr(fileName, callback) {

  var arr = [];
  var readObj = read_line.createInterface({
      input: fs.createReadStream(fileName)
  });

  // 一行一行地读取文件
  readObj.on('line', function (line) {
      //arr.push(line);
      num++;
      console.log(num+": "+line);
  });
  // 读取完成后,将arr作为参数传给回调函数
  readObj.on('close', function () {
      callback(arr);
      console.log("行读取关闭");
  });
}
