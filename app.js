let bars = document.querySelectorAll(".tooltip")
let d = new Date();
let day = d.getDay()

let weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];


fetch("data.json")
.then(response => response.json())
.then(data => {
    for(let i = 0; i < data.length; i++){
        bars[i].innerText = data[i].amount;
    }
})