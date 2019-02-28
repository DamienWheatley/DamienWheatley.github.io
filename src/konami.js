function activateEgg(){
    document.body.style.backgroundImage = "url('./images/PostApocalyptic.jpg')";
    
    alert("url('https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif')");
}

document.addEventListener('keydown', function(e){

    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    };
    let konamiCode = ['up','up','down','down','left','right','left','right','b','a'];
    let konamiCodePosition = 0;
    let key = allowedKeys[e.keyCode];
    console.log(key + ' was just pressed');
    let requiredKey = konamiCode[konamiCodePosition];
    console.log(requiredKey + ' is the required key');
    if(key == requiredKey){
        konamiCodePosition++
        console.log(konamiCodePosition);

        if(konamiCodePosition == konamiCode.length){
            activateEgg();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});