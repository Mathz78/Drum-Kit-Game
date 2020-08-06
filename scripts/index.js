var numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // I can create a variable to refer the button and change the color using the variable
        // or i can just use "this"
        
        // Variable receive the text of the button that have been clicked
        // var text = this;
        
        // Change the color to white;
        // text.style.color = 'darkcyan';
        this.style.color = "white";

    });
}