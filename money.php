<link rel="stylesheet" href="style.css">
<div class="data">
    <form method="POST" action="money.php">
        Ваша ставка: <input type="text" name="rate"><br><br>
        Время работы: <input type="text" name="hours"> часов <input type="text" name="minutes"> минут<br>
        Время переработки: <input type="text" name="overHours"> часов <input type="text" name="overMinutes"> минут<br><br>
        <input type="submit" class="showRes" value="Узнать результат">

    </form>
</div>

<div class="data">
    <?php
    

    if (is_numeric($resultOne)) {
        echo 'Сумма без переработок: <span class="res">' . $resultOne . '</span><br>' . 'Сумма с переработками: <span class="res">' . $resultTotal . '</span>';
    }

    ?>

</div>