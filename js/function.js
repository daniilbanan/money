//Вычисление формулы

var rate = document.getElementById("rate").value;
var hours = document.getElementById("hours").value;
var minutes = document.getElementById("minutes").value;
var overHours = document.getElementById("overHours").value;
var overMinutes = document.getElementById("overMinutes").value;
var totalMinutes, totalOverMinutes;
var overRate = rate + rate / 2;

function resultTotal() {

    if (minutes == 15 || overMinutes == 15) {
        totalMinutes = rate / 4;
        totalOverMinutes = overRate / 4;
    } else if (minutes == 30 || overMinutes == 30) {
        totalminutes = rate / 2;
        totalOverMinutes = overRate / 2;
    } else if (minutes == 45 || overMinutes == 45) {
        totalminutes = rate - rate / 4;
        totalOverMinutes = overRate - overRate / 4;
    }

    var resultOne = rate * hours + totalMinutes;
    var resultTotal = resultOne + overRate * overHours + totalOverMinutes;

    document.getElementById("resultOne").innerHTML = resultOne;
    document.getElementById("resultTotal").innerHTML = resultTotal;
}