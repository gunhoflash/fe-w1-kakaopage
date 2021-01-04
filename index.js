// refer: https://expressjs.com/ko/starter/hello-world.html
const express = require('express')
const app = express()
const port = 3000

// set root directories to serve static files
app.use(express.static('public'))
app.use(express.static('views'))

// start the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
