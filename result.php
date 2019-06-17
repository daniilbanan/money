<link rel="stylesheet" href="style.css">
<div class="data">
    <?php
    
    if(isset($_POST['rate'])) {
        $rate = trim($_POST['rate']);
    }

    if (isset($_POST['hours'])) {
        $hours = trim($_POST['hours']);
    }

    if (isset($_POST['minutes'])) {
        $minutes = trim($_POST['minutes']);
    }

    if (isset($_POST['overHours'])) {
        $overHours = trim($_POST['overHours']);
    }

    if (isset($_POST['overMinutes'])) {
        $overMinutes = trim($_POST['overMinutes']);
    }

    $overRate = $rate + $rate / 2;

    $resultOne = $rate * $hours + $rate / 60 * $minutes;
    $resultTotal = $resultOne + $overRate * $overHours + $rate / 60 * $overMinutes;

    if (is_numeric($resultOne)) {
        echo 'Сумма без переработок: <span class="res">' . $resultOne . '</span><br>' . 'Сумма с переработками: <span class="res">' . $resultTotal . '</span>';
    }

    ?>

</div>