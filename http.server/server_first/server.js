const http = require("http");

const server = http.createServer((req, res) => {
  console.log("REQ", req.method);
  if (req.method === "Get") {
    res.statusCode = 200;

    res.setHeader("content type", "text/html");
  } else if (req.method === "Poest") {
    res.end("<h1>hello first</h1>");

    res.statusCode = 200;

    res.setHeader("content type", "text/html");
  }
});

server.listen(8008, () => {
  console.log("Listening on port 8008");
});
