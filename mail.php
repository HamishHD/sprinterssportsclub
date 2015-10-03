<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Thank you for contacting us. As early as possible  we will contact you '
	);

    $name = $_POST['name']; 
    if($_POST['email'] != '')
    {
        $email = $_POST['email'];
        $name = $_POST['name'];
    	$dob = $_POST['dob'];
    	$contact = $_POST['contact'];
    	$programme = $_POST['programme'];
    	
    	$email_from = $email;
    };
    
    $message = $_POST['message'];
    $email_to = $_POST['to'];

    

    if($_POST['email'] != '')
    {
        $body = 'Name: ' . $name . "\n\n" .'Date of Birth'. $dob. "\n\n". 'Email: ' . $email . "\n\n" . 'Phone: ' . $contact . "\n\n" . 'Programme Interested in: ' .$programme. "\n\n" . 'Message: ' . $message;
        $success = mail($email_to, "INQUIRY", $body, 'From: <'.$email_from.'>');
        }else{
        	$body = 'Topic: ' . $name . "\n\n" . 'Message: ' . $message;
        	$success = mail($email_to, "INQUIRY", $body, 'From: <>');
        };

    

    echo json_encode($status);
    die;

?>