var countdown = document.getElementById("countdown");
var countDownDate = new Date("Sept 25, 2024 18:0:0").getTime();

function set(){
    var now = new Date().getTime();

    var distance = countDownDate - now;
    
    // calculating the components of time
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    countdown.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}
var timerUpdate = setInterval(set(), 1000);