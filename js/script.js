var i = 0;
var title_name = "Welcome to My Website";
var speed = 100; //speed in ms

function typeWriter(){
    if(i < title_name.length){
        document.getElementById("typewriter").innerHTML += title_name.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
