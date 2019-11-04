const express = require('express')
const app = express()
const port = 3000
var testRouter = require("./index")
var woo = require("./base/woo")
var line = require("./base/line")
var crwalingRouter = require("./crwaling_blogs")

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))

  app.use(testRouter)
  app.use(crwalingRouter)
  app.use(woo)
  app.use(line)
