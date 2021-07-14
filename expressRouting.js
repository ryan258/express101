// We'll make a mini express app.
const express = require('express')
const app = express()

// app object has a few methods
//!The MAIN HTTP / REST verbs! /~=~ CRUD
// 👻 https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// 1. get ~= "read" (default) - ask for a resource
// 2. post ~= "create" - to submit something to a resource
// 3. delete ~= "delete" - to delete a resource
// 4. put ~= "update" - to replace a resource
//!5. all (an Express thing) - I'll except any method

// .get(), .post, .delete(), .put() are methods w/ 2 args
// -1- path
// -2- callback to run if an HTTP req that matches THIS verb is made to the path in the first argument

// app.all('/', (req, res) => {
//   res.send(`<h1>welcome to the home page - y'all</h1>`)
// })
app.get('/', (req, res) => {
  console.log(req) // at the end of it we'll see a route constructor w/ a property of methods that will be set to the method type that was used
  res.send(`<h1>welcome to the home page - get</h1>`)
})
app.post('/', (req, res) => {
  res.send(`<h1>welcome to the home page - post</h1>`)
})
app.delete('/', (req, res) => {
  res.send(`<h1>welcome to the home page - delete</h1>`)
})
app.put('/', (req, res) => {
  res.send(`<h1>welcome to the home page - put</h1>`)
})

app.listen(3000)
console.log(`Listening on port 3000 🥳`)
