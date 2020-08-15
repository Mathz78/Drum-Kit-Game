var numberOfButtons = document.querySelectorAll(".drum").length;

// Event and Function that get the key that was pressed and call the function to play the sound.
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();
    playSounds(keyPressed);
});

// This for-loop add an eventListener to each button to know which one was pressed
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // I can create a variable to refer the button and change the color using the variable
        // or i can just use "this", because "this" refer to the button that was pressed
        
        // Variable receive the text of the button that have been clicked
        // var text = this;
        
        // Change the color to white;
        // text.style.color = 'darkcyan';

        // Create a variable to receive the button that was pressed and call the function to play the sound using that variable as parameter
        var buttonInnerHTML = this.innerHTML;
        playSounds(buttonInnerHTML);
    });
}

// This function play the sounds based on the input
function playSounds(letter) {
    var letter = letter;

    // This switch-case play the sounds using the button was pressed.
    switch (letter) {
        case "w":
            var tom1 = new Audio("../sounds/tom1.mp3");
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio("../sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("../sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("../sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case "j":
            var snare = new Audio("../sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("../sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var kick = new Audio("../sounds/kick-bass.mp3");
            kick.play();
            break;
    
        case "capslock":
            console.log("ok dude, why are you using capslock here???? hahah so funny!!");
            break;

        case "shift":
            console.log("are you using shift right now? oh dude.. hahaha you're funny, right?");
            break;

        case "f5":
            break;

        default:
            alert("Sorry, this key doesn't work!! Try again!!");
            break;
    }
}