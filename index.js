const express = require('express')
const router = express.Router();
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');
const sanitizeHtml = require('sanitize-html');
const path = require(`path`);


var requestOptions = { method: "GET" ,uri: "https://www.melon.com/chart/",headers: { "User-Agent": "Mozilla/5.0" } ,encoding: null};
router.get("/test", function(req, res, next){

    request(requestOptions, function(error, response, body){
        iconv.extendNodeEncodings(); 
        var strContents = new Buffer(body); 
      let resultArr = [];
     
      const $ = cheerio.load(iconv.decode(strContents, 'UTF-8').toString());
      let colArr = $(".rank01").find("a")
      let img = $(".image_typeAll").find("img")
      let cnt = $(".cnt")
    
      for(var i = 0; i < colArr.length; i++){
       let info = new Object();
         info.title = colArr[i].attribs.title.replace("재생", "")
         info.href = colArr[i].attribs.href
         info.img = img[i].attribs.src

       // info.ac = ac[i].children[1].attribis
        resultArr.push(info)
    }
    

      res.json(resultArr)
    });
  })
module.exports=router