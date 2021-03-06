document.addEventListener('DOMContentLoaded', function() {

    let request = new XMLHttpRequest;
    request.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=sJgDVeZDHq2Gbm47OnWevUpmFaHsHf6c&limit=10')

    request.onload = function () {
        if (request.status >= 200 && request.status <= 400){
            console.log(request.status);
            let response = JSON.parse(request.responseText);
            console.log(response);
            if(response.data.length < 10)return;
            for(let i=0;i<10;i++){
                var node = document.getElementById("gif~"+i);
                node.setAttribute("src",response.data[i].images.fixed_width.url);
            }
        } else {
            console.log('Reached GIPHY but API returned an error');
        }
    }
    request.send();
});