const express = require('express')
const app = express()
const port = 3000
var testRouter = require("./index")
var woo = require("./base/woo")
var line = require("./base/line")
var mo1 = require("./mo1")
var crwalingRouter = require("./crwaling_blogs")

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/123', function(req, res){
  mo1.then(function(redata){
     return res.json(redata.sort(function(a,b){return a.index-b.index}))
  })
})
app.listen(port, () => console.log(`Example app listening on port port!`))

  app.use(testRouter)
  app.use(crwalingRouter)
  app.use(woo)
  app.use(line)
