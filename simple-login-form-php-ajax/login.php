<?php
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    if(empty($user) && empty($pass))
        echo "All fields are required!";
    else
        if(empty($user) || empty($pass))
            echo "Username or Password wrong!";
            else
            echo "Welcone, ".$user;
   // echo "Pagina de User";
        
?>