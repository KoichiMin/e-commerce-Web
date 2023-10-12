var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

document.addEventListener('click', jump);

var checkDead = setInterval(function() {
    // determine the position of the red character
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    // determine the position of the blue block
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    // if blockLeft is in the position of -20 to 20px and the red character is equal or more to 130px
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);