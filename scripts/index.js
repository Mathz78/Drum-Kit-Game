var numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        alert("I got clicked.");
    });
}