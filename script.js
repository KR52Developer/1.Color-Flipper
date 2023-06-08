let colorCodeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];

let clickMeBtn = document.querySelector(".clickMeBTn");
let mainContent = document.querySelector(".mainContent");
let color = document.querySelector(".color");

clickMeBtn.addEventListener("click", () => {

    // To Pick Random Number From ColorCodeNumbers Array

    function pickRandomNumber() {
        let randomNumber = Math.floor(Math.random() * 16);
        return colorCodeNumbers[randomNumber];
    };

    // To Generate Random Color Code To Change the Container Background Color

    let colorCode = "#";
    for (i = 0; i < 6; i++) {
        colorCode = colorCode + pickRandomNumber();
    }
    mainContent.style.backgroundColor = colorCode;
    color.style.color = colorCode;
    color.textContent = colorCode;
})