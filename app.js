let bars = document.querySelectorAll(".tooltip")

fetch("data.json")
.then(response => response.json())
.then(data => {
    for(let i = 0; i < data.length; i++){
        bars[i].innerText = data[i].amount;
    }
})