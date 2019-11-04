const cheerio = require('cheerio');
const request = require('request');

request("http://codedemos.com/sampleblog", (error,
response, html)=> {
    if(!error && response.statusCode==200) {
        const $ = cheerio.load(html);
    }
})