function scrollTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function shrinkEgg() {
    let eggArea = document.getElementById('konamiIMG');
    eggArea.setAttribute("height",'0%');
    eggArea.setAttribute("width",'0%');
}


function activateEgg(){
    document.body.style.backgroundImage = "url('./images/PostApocalyptic.jpg')";
    let eggItem = "https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif";
    
    let eggArea = document.getElementById('konamiIMG');
    eggArea.setAttribute("src",eggItem);
    eggArea.setAttribute("height",'100%');
    eggArea.setAttribute("width",'100%');
    scrollTop();
    setTimeout(shrinkEgg(),10000);
    alert("Oh dear...");
}

let konamiCode = ['up','up','down','down','left','right','left','right','b','a'];
let konamiCodePosition = 0;
document.addEventListener('keydown', function(e){

    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    };

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