getTrending = function(){
    document.addEventListener('DOMContentLoaded', function() {

        let request = new XMLHttpRequest;
        request.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=sJgDVeZDHq2Gbm47OnWevUpmFaHsHf6c&limit=10')

        request.onload = function () {
            if (request.status >= 200 && request.status <= 400){
                let data = JSON.parse(request.responseText);
                console.log(data);
                let _trendingGIfs = document.getElementById("trendingGIFS");

                if(data.data.length < 10)return;
                for(let i=0;i<10;i++){
                    var node = document.getElementById("gif~"+i);
                    node.setAttribute("src",data.data[i].images.fixed_width.url);
                    _trendingGIfs.appendChild(data)
                }
            } else {
                console.log('Reached GIPHY but API returned an error');
            }
        }
        request.send();
    });
}