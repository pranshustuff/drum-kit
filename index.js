var array = document.querySelectorAll(".drum");

var tom1 = new Audio('./sounds/tom-1.mp3');
var tom2 = new Audio('./sounds/tom-2.mp3');
var tom3 = new Audio('./sounds/tom-3.mp3');
var tom4 = new Audio('./sounds/tom-4.mp3');
var crash = new Audio('./sounds/crash.mp3');
var kick = new Audio('./sounds/kick-bass.mp3');
var snare = new Audio('./sounds/snare.mp3');

for(var i = array.length ;i>0; i--){
    array[i-1].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        pressed(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    pressed(event.key);
})


function makeSound(key){
    switch (key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            crash.play();
            break;
        case "k":
            snare.play();
            break;
        case "l":
            kick.play();
            break;
    }
}

function pressed(key){
    var activeKey = document.querySelector("." + key);

    activeKey.classList.add("pressed");
    
    setTimeout(function(){activeKey.classList.remove("pressed")}, 200);
}
