const express = require('express')
const app = express()

// app comes with a .use() method which is how we invoke most middleware in Express
// - arg 1 - the middleware you want to run (this will be added across the board to the whole application)
// http://expressjs.com/en/4x/api.html#express.static
app.use(express.static('public'))
// we can serve as many public folders as we want
// app.use(express.static('alsoPublic'))

app.listen(3000)
console.log('Server listening on port 3000')
