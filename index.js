const express = require('express')
const router = express.Router();
const path = require(`path`);

//user-module
var line = require("./module/lineModule")
var woo = require("./module/wooModule")


router.get("/api/v1/lists", async function(req, res, next){
  var lineModlue = await line; 
  var wooModule = await woo; 
  var totalResult = lineModlue.concat(wooModule);

  return res.json(totalResult.sort(function(a,b){
    a = new Date(a.writeDtm);
    b = new Date(b.writeDtm);
  return a>b ?-1:a<b ?1:0;}))
  })

module.exports=router