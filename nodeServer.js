//! The most basic web server we can have in node!
// - node is so good at managing http traffic

// http is native to node js
const http = require('http') // allows us to make HTTP req/res and the objects to interact with

// give access to this computers file system - not a security risk!
const fs = require('fs') // file system, built into node

// http module has a createServer method
// and takes 1 arg - an Anon function
// - there are node modules called request and response so just use req and res
//   - req - obj is what what we know about the requesting machine, their client, what page they wanted to find, any data passed to us, lots of stuff!
//   - res - obj is what we send back
// - generally we're going to get stuff out of the req object and add stuff to the res object
//! if traffic shows up, quickly creates an HTTP server to handle the traffic
const server = http.createServer((req, res) => {
  // console.log(req)
  // inside the req obj we have a url property
  // console.log(req.url) // we get whatever came after the root domain
  //? where's that image?
  // console.log(`A request was made to req.url ${req.url}`) // /node.png
  if (req.url === '/') {
    // we get whatever came after the root domain
    // console.log('the user want the home page bc the req obj has "/" in the url property!')
    // console.log('res is our way of responding to the requester')
    // an http message:
    //! - 1. start line - node takes care of this for us
    //! - 2. header - 2 args
    //      - takes a status code
    //      - object for the mime-type
    res.writeHead(200, { 'content-type': 'text/html' }) // this will write out our headers
    //! - 3. body
    // res.write('')
    const homePageHTML = fs.readFileSync('node.html') // go out and bring contents of this file into the homePageHTML variable
    console.log(homePageHTML) // a buffer!? that's ok, node will take care of it for us - it's the contents of the file
    res.write(homePageHTML) //
    //! finally we have to close the connection so the browser isn't left hanging
    res.end()
  } else if (req.url === '/node.png') {
    res.writeHead(200, { 'content-type': 'image/png' })
    const image = fs.readFileSync('node.png')
    res.write(image)
    res.end()
  } else if (req.url === '/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    const css = fs.readFileSync('style.css')
    res.write(css)
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' }) // this will write out our headers
    //! - 3. body
    res.write('<h4>beeping 404!</h4>')
    //! finally we have to close the connection so the browser isn't left hanging
    res.end()
  }
})

// createServer returns an object with listen method
// it takes 1 arg
// - port to listen for http traffic on

server.listen(3000)

// get the http response w/
// $ curl -v localhost:3000
