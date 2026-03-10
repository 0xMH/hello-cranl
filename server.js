const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html>
<html>
<head><title>Hello CranL</title></head>
<body style="font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#0a0a0b;color:#e4e4e7">
<h1>Hello World from CranL deployed directly from github!</h1>
</body>
</html>`);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Listening on port 3000");
});
