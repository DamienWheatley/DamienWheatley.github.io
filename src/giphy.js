document.addEventListener('DOMContentLoaded', function() {

    let request = new XMLHttpRequest;
    request.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=sJgDVeZDHq2Gbm47OnWevUpmFaHsHf6c&limit=10')

    request.onload = function () {
        if (request.status >= 200 && request.status <= 400){
            let data = JSON.parse(request.responseText);
            console.log(data);
            document.getElementById("GIFS").innerHTML = data[0].url;
        } else {
            console.log('Reached GIPHY but API returned an error');
        }
    }
    request.send();
});
