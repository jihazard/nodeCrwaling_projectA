
const express = require('express')
const router = express.Router();
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');
const sanitizeHtml = require('sanitize-html');


 router.get("/line1", async function(req, res, next){
    console.log("====line1")

   
    promise.then((result)=>{
      // console.log(resolveData)
   
        return res.json( result.sort(function(a,b){return a.index-b.index}))
    })
});

//Promise 테스트 완료

    let promise = new Promise(function(resolve, reject){


        const URL  = "https://engineering.linecorp.com/ko/blog/page/";
        let requestOptions = { method: "GET" ,uri: URL, headers: { "User-Agent": "Mozilla/5.0" } ,encoding: null};
       
        let resultArr = [];
        for(let itx = 1; itx <= 18; itx++){
            let url = URL +itx;
            console.log("url ==> " + url)
            request(url, function(error, response, body){
                iconv.extendNodeEncodings(); 
                var strContents = new Buffer(body); 
                
              const $ = cheerio.load(iconv.decode(strContents, 'UTF-8').toString());
 
              $("article").each((i,el)=>{
                    let info = new Object(); 
                    const header = $(el).find("h2").text().replace(/\s\s+/g, '');
                    const index = itx;
                    const title = $(el).find("h2").text().replace(/\s\s+/g, '');
                    const writeDtm = $(el).find(".byline").text().replace('|', '').trim();
                    const writer = $(el).find(".author-name").text().replace(/\s\s+/g, '').split("|")[0];
                    const avatar  = $(el).find(".avatar").attr("src");
                    const description  = $(el).find(".entry-summary p").text();
                    const url  = $(el).find(".plain").attr("href");

                    info.index = index;
                    info.writer = writer;
                    info.writeDtm = writeDtm;
                    info.avatar = avatar;
                    info.title = title;
                    info.description = description;
                    info.url = url;
                   
                    resultArr.push(info)
                    
              })

              resolve(resultArr) 
             
            })
        }
 
    })
   



module.exports=router

