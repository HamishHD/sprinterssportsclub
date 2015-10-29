<?php
	 header("Access-Control-Allow-Origin: *");
	
    $name= $_GET['name'];
    
    if($_GET['email'] != '')
    {
        $email = $_GET['email'];
        $name = $_GET['name'];
    	$dob = $_GET['dob'];
    	$contact = $_GET['contact'];
    	$programme = $_GET['programme'];
    	
    	$email_from = $email;
    };
    
    $message = $_GET['message'];
    $email_to = 'adarsh.pixolo@gmail.com';
    
    
    if (mail("adarsh.pixolo@gmail.com","My subject","hey hello", 'From: <'.$email_from.'>')) { 
            echo '<p>Your message has been sent!</p>';
        } else { 
            echo '<p>Something went wrong, go back and try again!</p>'; 
        };

    
        $body = 'Name: ' . $name . "\n\n" .'Date of Birth'. $dob. "\n\n". 'Email: ' . $email . "\n\n" . 'Phone: ' . $contact . "\n\n" . 'Programme Interested in: ' .$programme. "\n\n" . 'Message: ' . $message;
        
        
        //print_r(mail($email_to, "INQUIRY", $body, 'From: <'.$email_from.'>'));
        

    

    die;

?>