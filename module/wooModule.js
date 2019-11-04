
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');

    module.exports = new Promise(function(resolve, reject){
    let resultArr = [];
    
            var requestOptions = { method: "GET" ,uri: "http://woowabros.github.io/",headers: { "User-Agent": "Mozilla/5.0" } ,encoding: null};
            const URL  = "http://woowabros.github.io/";
        
            request(requestOptions, function(error, response, body){
                iconv.extendNodeEncodings(); 
                var strContents = new Buffer(body); 
                
             
              const $ = cheerio.load(iconv.decode(strContents, 'UTF-8').toString());
        
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
              
              resolve(resultArr)
              
            })
        })
       
    
