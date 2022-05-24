const express = require("express");
const server = express();
const path = require("path");
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "/index.html");
console.log(HTML_FILE);
server.use(express.json());
server.use(express.static("public"));
server.use(express.static("dist"));

server.get("/", (req, res) => {
    res.sendFile(HTML_FILE, function(err){
        if(err){
            res.status(500).send(err);
        }
    });
});

// server.get("/", (req, res) => {
//     fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send("An error occurred");
//       }
  
//       return res.send(
//         data.replace(
//           '<div id="root"></div>',
//           `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`
//         )
//       );
//     });
//   });

