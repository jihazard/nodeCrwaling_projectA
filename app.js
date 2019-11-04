const express = require('express')
const app = express()
const port = 3000
var testRouter = require("./index")
var woo = require("./base/woo")
var line = require("./base/line")
var mo1 = require("./mo1")
var mo2 = require("./mo2")
var crwalingRouter = require("./crwaling_blogs")


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/123', async function(req, res){
    var x = await mo1 
    console.log("x ==>  " + x.length)
    var y =await mo2
    console.log("y ==>  " + y.length)
   
   var t = x.concat(y);
  console.log("====t ====> " + t.length)
    return res.json(t.sort(function(a,b){
        a = new Date(a.writeDtm);
        b = new Date(b.writeDtm);
      return a>b ?-1:a<b ?1:0;}))
})
app.listen(port, () => console.log(`Example app listening on port port!`))

  app.use(testRouter)
  app.use(crwalingRouter)
  app.use(woo)
  app.use(line)
