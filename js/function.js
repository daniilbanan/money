//Вычисление формулы

window.onload = function() {
    let showRes = document.getElementById('showRes');
    let hidden = document.querySelector('.hidden');

    showRes.addEventListener('click', function show(evt) {
        evt.preventDefault();
        hidden.classList.add('show');

        let rate = parseInt(document.getElementById('rate').value.replace(/[^\d]/g, ''));
        let hours = parseInt(document.getElementById('hours').value);
        let minutes = parseInt(document.getElementById('minutes').value);
        let overHours = parseInt(document.getElementById('overHours').value);
        let overMinutes = parseInt(document.getElementById('overMinutes').value);
        let overRate = rate + rate / 2;

        let result = rate * hours + rate / 60 * minutes;
        let result_str = result.toFixed(2);
        let overResult = result + (overRate * overHours + overRate / 60 * overMinutes);
        let overResult_str = overResult.toFixed(2);

        document.getElementById('result').innerHTML = result_str;
        document.getElementById('overResult').innerHTML = overResult_str;
    });
};