document.addEventListener('DOMContentLoaded', function() {

    let request = new XMLHttpRequest;
    request.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=sJgDVeZDHq2Gbm47OnWevUpmFaHsHf6c&limit=10')

    request.onload = function () {
        if (request.status >= 200 && request.status <= 400){
            data = JSON.parse(request.responseText).data.image_url;
            console.log(data);
            document.getElementById("GIFS").innerHTML = '<img src="'+data+'" title="GIF via GIPHY">';
        } else {
            console.log('Reached GIPHY but API returned an error');
        }
    }
    request.send();
});