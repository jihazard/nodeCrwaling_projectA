
const express = require('express')
const router = express.Router();
const cheerio = require('cheerio');
const request = require('request');
const rp = require('request-promise');
const iconv = require('iconv-lite');
const sanitizeHtml = require('sanitize-html');


router.get("/woo1", function(req, res, next){
    var x = out()
    console.log(x)
})

async function out() {
    let resultArr = [];
    var requestOptions = { method: "GET" ,uri: "http://woowabros.github.io/",headers: { "User-Agent": "Mozilla/5.0" } ,encoding: null
    ,transform: function (body) {
        iconv.extendNodeEncodings(); 
        var strContents = new Buffer(body); 
        return cheerio.load(iconv.decode(strContents, 'UTF-8').toString());
    }};
    const URL  = "http://woowabros.github.io/";
    await rp(requestOptions).then(function($){
        $(".list-module").each((i,el)=>{
            let info = new Object();
            const date = $(el).find(".post-meta").text().replace(/\s\s+/g, '');
            const writeDtm = new Date(Date.parse(date.substr(0,13))).toLocaleDateString();
            const writer = date.substr(date.length-3,date.length).trim();
            const avatar = $(el).find(".post-meta").find("img").attr("src")
            const title = $(el).find("a").find("h2").text().replace(/\s\s+/g, '');
            const description = $(el).find("a").find("p").text().replace(/\s\s+/g, '');
            const url = URL + $(el).find("a").attr("href")
            info.writer = writer;
            info.writeDtm = writeDtm;
            info.avatar = avatar;
            info.title = title;
            info.description = description;
            info.url = url;
            resultArr.push(info)
      })
      console.log(resultArr)
    }).catch(function(err){
        console.log(err)
    })
   
}

function callPage()
{
    var requestOptions = { method: "GET" ,uri: "http://woowabros.github.io/",headers: { "User-Agent": "Mozilla/5.0" } ,encoding: null
                            ,transform: function (body) {
                                return cheerio.load(body);
                            }};
                  
    return new Promise((resolve, reject) => {
        request(requestOptions, (error, response, body) => {
            if (error) reject(error);
            if (response.statusCode != 200) {
                reject('Invalid status code <' + response.statusCode + '>');
            }
            iconv.extendNodeEncodings(); 
            var strContents = new Buffer(body); 
            const $ = cheerio.load(iconv.decode(strContents, 'UTF-8').toString());

            
            resolve(strContents);
        });
    });
}
function sleep(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
}

async function getWoowaList() {
    console.log("우아하다 우아해")
    const URL  = "http://woowabros.github.io/";
    let resultArr = [];
    await sleep(5000);
    await callPage().then(function(strContents){
      
    
        


    });
   
  //console.log(resultArr)
  return resultArr;
}

module.exports=router

