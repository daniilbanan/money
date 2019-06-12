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

    if ($minutes == 15 || $overMinutes == 15) {
        $totalMinutes = $rate / 4;
        $overTotalMinutes = $overRate / 4;
    } elseif ($minutes == 30 || $overMinutes == 30) {
        $totalminutes = $rate / 2;
        $overTotalMinutes = $overRate / 2;
    } elseif ($minutes == 45 || overMinutes == 45) {
        $totalminutes = $rate - $rate / 4;
        $overTotalMinutes = $overRate - $overRate / 4;
    }

    $resultOne = $rate * $hours + $totalMinutes;
    $resultTotal = $resultOne + $overRate * $overHours + $overTotalMinutes;

    if (is_numeric($resultOne)) {
        echo 'Сумма без переработок: <span class="res">' . $resultOne . '</span><br>' . 'Сумма с переработками: <span class="res">' . $resultTotal . '</span>';
    }

    ?>

</div>