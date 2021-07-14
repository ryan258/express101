//! The most basic web server we can have in node!
// - node is so good at managing http traffic

// http is native to node js
const http = require('http') // allows us to make HTTP req/res and the objects to interact with

// http module has a createServer method
// and takes 1 arg - an Anon function
// - there are node modules called request and response so just use req and res
//   - req - obj is what what we know about the requesting machine, their client, what page they wanted to find, any data passed to us, lots of stuff!
//   - res - obj is what we send back
// - generally we're going to get stuff out of the req object and add stuff to the res object
//! if traffic shows up, quickly creates an HTTP server to handle the traffic
const server = http.createServer((req, res) => {
  // console.log(req)
  // console.log('res is our way of responding to the requester')
  // an http message:
  //! - 1. start line - node takes care of this for us
  //! - 2. header - 2 args
  //      - takes a status code
  //      - object for the mime-type
  res.writeHead(200, { 'content-type': 'text/html' }) // this will write out our headers
  //! - 3. body
  res.write('<h1>beep</h1>')
  //! finally we have to close the connection so the browser isn't left hanging
  res.end()
})

// createServer returns an object with listen method
// it takes 1 arg
// - port to listen for http traffic on

server.listen(3000)
