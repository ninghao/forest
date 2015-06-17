<?php	
	if(empty($_POST['name2']) || empty($_POST['email2']) || empty($_POST['message2']) || empty($_POST['']))
	{
		return false;
	}
	
	$name2 = $_POST['name2'];
	$email2 = $_POST['email2'];
	$message2 = $_POST['message2'];
	$ = $_POST[''];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from My Site.";
	$email_body = "You have received a new message. \n\n".
				  "Name2: $name2 \nEmail2: $email2 \nMessage2: $message2 \n: $ \n";
	$headers = "From: contact@yoursite.com\n";
	$headers .= "Reply-To: $email2";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>