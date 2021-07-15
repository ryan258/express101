// NodeJS is the language!
// Express is just a module of NodeJS. You can't have Express w/o NodeJS.
//!- Express allows us to hijack the req, res process of changing the req and res obj any time, any way we want to + routing
// - gives us a whole bunch of short cuts so we don't have to do all the hard stuff in Node
// - allows you to build an API super fast to handle JSON! + ease of dev use + performance
// - it provides us w/ router, takes care of writeHeads, mime-type, closing connections, makes static file serving easier, no more need for the http module
// - it's a routing and middleware web framework - it doesn't do much else on its own
// NodeJS is written in C and it reads/runs JS

// keep native node modules at the very top
const path = require('path') // machine's path location

// create an express application
const express = require('express')
const app = express() // app is the express createApplication inside the Express module invoked and is an Express application
// now app has a ton of cool methods and properties + other cool stuff

// serve up static files
app.use(express.static('public'))

// all - takes to args
// -1- route
// -2- callback to run if the route is requested
app.all('/', (req, res) => {
  // Express handles the basic headers(status code, mimetype)
  // read in node.html w/ res.sendFile(absPath) send back a hard file
  console.log(path.join(__dirname + '/node.html'))
  res.sendFile(path.join(__dirname + '/node.html'))
  //-- instead of write we use .send()
  // res.send(`<h1>this is the home page 👻</h1>`)
  // Express handles the end!
})

app.all('*', (req, res) => {
  res.send(`<h1>sorry page not found 👻</h1>`)
})

// now we just have to listen...
app.listen(3000)
console.log(`The server is listening on port 3000! 👻`)
