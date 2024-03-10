<?php

header('Content-Type: application/json');

if(isset($_POST['name']) && !empty(($_POST['name']))){

    $nome = addslashes($_POST['name']);
    $telefone = addslashes($_POST['phone']);
    $email = addslashes($_POST['email']);
    $selectquemsou = addslashes($_POST['selectQuemSou']);
    $mensagem = addslashes($_POST['mensagem']);

    
    $to = "contato@corretor.com.br";
    $subject = "Formulário Espaço Corretor";
    $body = "Nome: ".$nome. "\r\n".
    "Telefone com DDD: " .$telefone. "\r\n".
    "Email: " .$email. "\r\n".
    "Corretor ou Dono?: " .$selectquemsou. "\r\n".
    "Mensagem: " .$mensagem;

    $header = "From: contato@corretor.com.br"."\r\n"
    ."Reply-To:".$email. "\r\n"
    ."X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        echo json_encode("PHP recebeu os dados" .$nome);
    }else{
        echo json_encode("Email não enviado");
    }
}

?>



