//Вычисление формулы

var rate = document.getElementById('#rate').value;
var hours = document.getElementById('#hours').value;
var minutes = document.getElementById('#minutes').value;
var overHours = document.getElementById('#overHours').value;
var overMinutes = document.getElementById('#overMinutes').value;
var overRate = rate + rate / 2;

var hidden = document.querySelector('.hidden');
var showRes = document.querySelector('.showRes');

showRes.addEventListener('click', show);

function show(evt) {
    evt.preventDefault();
    hidden.classList.add('show');

    var resultOne = Number(rate) * Number(hours) + Number(rate) / 60 * Number(minutes);
    var resultTotal = resultOne + Number(overRate) * Number(overHours) + Number(overRate) / 60 * Number(overMinutes);

    document.getElementById('#resultOne').innerHTML = resultOne;
    document.getElementById('#resultTotal').innerHTML = resultTotal;

}