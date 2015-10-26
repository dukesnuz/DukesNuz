<?php
//echo 1;
require('../includes/config.inc.php');
//echo 2;
if(isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['email']) && isset($_POST['message']) &&
   filter_var ($_POST['email'],FILTER_VALIDATE_EMAIL) )
  //if(2>4)
{
	
	
	require (MYSQL);
	
   // echo 4;
	//,page_name,type
	$q= 'REPLACE INTO contact(first_name,last_name,message,email,type,page_name,ip) 
			VALUES(?,?,?,?,?,?,?)';
		//echo 5;	
		$stmt = mysqli_prepare($dbc,$q);
		//echo 55;	
		$page_name= "index.php";
		$type ="guest_book";
		$ip= $_SERVER['REMOTE_ADDR'];
		mysqli_stmt_bind_param($stmt, 'sssssss',$_POST['first_name'],$_POST['last_name'],$_POST['message'],$_POST['email'],$type,$page_name,$ip);
			
		//echo 6;			
			mysqli_stmt_execute($stmt);
		//echo 7;	
			if(mysqli_stmt_affected_rows($stmt)>0)
				{
					echo 'true';
					
					$body =$_POST['first_name']." Congradulations!\n";
					$body .="Thank you for signing my guest book\n\r";
					$body .="Your message:\n";
					$body .=$_POST['message']."\n";
					$body .="Your email:\n";
					$body .=$_POST['email']."\n\r";
					$body .="Regards,\nDavid Petringa\n";
					$body .="http://www.dukesnuz.com\n\r";
					$body .="Email End";
					
					mail($_POST['email'],"David Recieved Your Guest Book Message",$body,'FROM:'.CONTACT_EMAIL);
					
					//Send email to me
					mail(CONTACT_EMAIL_2,"Guest Book Message in on dukesNuz",$body,'FROM:'.CONTACT_EMAIL);
					
					exit;
				}else{
	             echo 'error_1';
				}
//if(!$stmt) echo mysqli_stmt_error($stmt);
}else{
	echo 'error_2';
}
