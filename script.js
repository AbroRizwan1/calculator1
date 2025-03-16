let display = document.querySelector("#input")
let buttons = document.querySelectorAll("button");

let buttonArry = Array.from(buttons)

let string = ""

buttonArry.forEach(function (btn) {

    btn.addEventListener("click", function (event) {


        if (event.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;

        } else if (event.target.innerHTML == "AC") {
            string = ""
            display.value = string;

        } else if (event.target.innerHTML == "=") {
            string = eval(string);
            display.value = string;

        } else if (event.target.innerHTML == "x") {
            string += "*"
            display.value = string;

        }else if (event.target.innerHTML == "÷"){
            string += "/"
            display.value = string;

        }else if (event.target.innerHTML == "%"){
            string += "/100"
            display.value = string;

        }else {
            string += event.target.innerHTML;
            display.value = string;
        }

    })

})