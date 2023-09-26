const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello !! Welcome to the home page");
  }
  if (req.url === "/about") {
    res.end("Here is your short story");
  }
  res.end(`
  <h1>OOOPs</h1>
  <h2>Page is  not available</h2>
  <a href="/">click here</a>
  `);
});

server.listen(4000);
