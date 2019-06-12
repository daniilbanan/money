<script src="js/function.js"></script>
<link rel="stylesheet" href="style.css">
<div class="data">
    <form method="POST" action="money.php">
        Ваша ставка: <input type="text" name="rate"><br><br>
        Время работы: <input type="text" name="hours"> часов <input type="text" name="minutes"> минут<br>
        Время переработки: <input type="text" name="overHours"> часов <input type="text" name="overMinutes"> минут<br><br>
        <input type="submit" class="btn" value="Узнать результат">

    </form>
</div>
<?php

    include __DIR__ . '/result.php';
?> 