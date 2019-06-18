//Вычисление формулы

window.onload = function() {
    var showRes = document.getElementById('showRes');
    var hidden = document.querySelector('.hidden');

    showRes.addEventListener('click', function show(evt) {
        evt.preventDefault();
        hidden.classList.add('show');

        var rate = parseInt(document.getElementById('rate').value);
        var hours = parseInt(document.getElementById('hours').value);
        var minutes = parseInt(document.getElementById('minutes').value);
        var overHours = parseInt(document.getElementById('overHours').value);
        var overMinutes = parseInt(document.getElementById('overMinutes').value);
        var overRate = rate + rate / 2;

        var result = rate * hours + rate / 60 * minutes;
        var result_str = result.toFixed(2);
        var overResult = result + (overRate * overHours + overRate / 60 * overMinutes);
        var overResult_str = overResult.toFixed(2);

        document.getElementById('result').innerHTML = result_str;
        document.getElementById('overResult').innerHTML = overResult_str;
    });
};