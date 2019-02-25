<<<<<<< HEAD
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello deChat\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
=======
const http = require("http")

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'})
   response.end('Hello World\n')
}).listen(8080)

console.log('Server running at http://127.0.0.1:8080/')
>>>>>>> a066005bce27a33f00bfa87c25b6f844e80becc7
