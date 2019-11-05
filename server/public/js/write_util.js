

var chart = document.querySelector(".chart")

function paintList(data){
    const li = document.createElement("li")
    li.className="chart-item"
    const album_div = document.createElement("div")
    album_div.className="album"

    const disc_img = document.createElement("img")
    disc_img.className="album-disc"
    disc_img.src ="disc.png"
    const album_cover = document.createElement("img")
    album_cover.className="album-cover"
    album_cover.src = data.avatar

    const album_content = document.createElement("div")
    const album_title = document.createElement("h2")
    const singer = document.createElement("p")
        
        album_title.innerText = data.title.length > 25 ? data.title.substring(0,22)+"..." : data.title
        
        singer.innerText=data.description
        album_content.appendChild(album_title);
        album_content.appendChild(singer);

        album_div.appendChild(album_cover)
        album_div.appendChild(disc_img)
       
    album_div.appendChild(album_content)
    li.appendChild(album_div)


    chart.appendChild(li)
}

function getList(){
    fetch("http://localhost:3000/api/v1/lists").then(function(response ){
        return response.json() 
    }).then(function(json){
            json.forEach(function(result){
            paintList(result)
        })
    })  
}

function init(){
        getList();
}


init();