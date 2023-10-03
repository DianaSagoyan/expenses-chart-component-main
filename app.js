let bars = document.querySelectorAll(".tooltip")
const now = new Date();

let weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

fetch("data.json")
.then(response => response.json())
.then(data => {
    for(let i = 0; i < data.length; i++){
        bars[i].innerText = data[i].amount;
    }
})

let today = document.getElementsByClassName(weekdays[now.getDay()]);

today[0].style.backgroundColor = "hsl(186, 34%, 60%)";

today[0].addEventListener("mouseover", () => {
    today[0].style.backgroundColor = "hsla(186, 34%, 60%, 0.821)";
})

today[0].addEventListener("mouseout", () => {
    today[0].style.backgroundColor = "hsl(186, 34%, 60%)";
})
console.log(today[0])