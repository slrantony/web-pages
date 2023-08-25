const timeline = 'December 31 2023 23:59:59 GMT+0530';

function calcTimediffer(endtime) {
    const now = new Date();
    const diff = Date.parse(endtime)- Date.parse(now);
    console.log(diff);
let days = Math.floor(diff/(1000*60*60*24));
let hours = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
let minutes = Math.floor(diff%(1000*60*60*24))/(1000*60);
let seconds = Math.floor(diff%(1000*60*60*24))/(1000);

document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
let x = setInterval(function() {
if(diff < 0){
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Closed!";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hour").innerHTML = "0";
document.getElementById("minute").innerHTML = "0";
document.getElementById("seconds").innerHTML = "0";

}
} , 1000)
}
calcTimediffer(timeline);

