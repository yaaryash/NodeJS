const fs = require("fs");
const http = require("http");
const url = require("url");

////////////////////////
//FILES

// const fs1 = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(fs1);
// const fs3 = "yaaryash";
// // fs.writeFileSync("./txt/output.txt", fs3);

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("File written");
//       });
//     });
//   });
// });

////////////////////////
//SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
let server = http.createServer((req, res) => {
  let pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("Hello from the Overview !");
  } else if (pathName === "/products") {
    res.end("Hello from the Products !");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Hello from the Page Not found !</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening from the port 8000");
});
