const secondHand = document.getElementById("s");
const minsHand = document.getElementById("m");
const hourHand = document.getElementById("h");
var hh = 0;
var mm = 0;
var ss = 0;


function resettime() {
  
    var news = document.getElementById("ss").value;
    var newm = document.getElementById("mm").value;
    var newh = document.getElementById("hh").value;
    
    var now = new Date();
    ss = news - now.getSeconds();
    mm = newm - now.getMinutes();
    hh = newh - now.getHours();
    console.log(hh,mm,ss);
}

function setDate() {
    var now = new Date();
    console.log(hh, mm, ss)
    var seconds = now.getSeconds();
    document.getElementById("d-s").innerHTML = seconds + ss + " s";
    const secondsDegrees = (((seconds + ss) / 60) * 360) + 180;
    secondHand.style.transform = 'rotate('+secondsDegrees+'deg)';

    var mins = now.getMinutes();
    document.getElementById("d-m").innerHTML = mins + mm + " m";
    const minsDegrees = (((mins + mm) / 60) * 360) + ((seconds / 60) * 6) + 180;
    minsHand.style.transform = 'rotate('+minsDegrees+'deg)';

    var hour = now.getHours();
    document.getElementById("d-h").innerHTML = hour + hh + " h";

    const hourDegrees = (((hour + hh) / 12) * 360) + ((mins / 60) * 30) + 180;
    hourHand.style.transform = 'rotate('+hourDegrees+'deg)';
}

const timset = setInterval(setDate, 1000);

setDate();

