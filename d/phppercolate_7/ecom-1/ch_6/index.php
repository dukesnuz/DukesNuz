<?php
//require('includes/config.inc.php');
require('../includes_2/config.inc.php');
 //test to see when user admin logged in
   // $_SESSION['user_id'] =1;
   // $_SESSION['user_admin'] = true;
 //end test see if user  admin logged in
require(MYSQL);

//added in chp 4
//if post use login 
if($_SERVER['REQUEST_METHOD'] === 'POST')
	{
		include('includes/login.inc.php');
	}
	
	
include('includes/header.html');
//echo 'expired'.$row['expired'];
//echo 'sesion'.$_SESSION['user_not_expired'];
?>

<h3>Chapter 6</h3>
<p><a href="##">Thank you page</a></p>
<p><a href="cancel.php">Cancel page</a></p>
<p><a href="##">Renew page Displays in 2nd part of this chapter.</a></p>
<h3>Welcome</h3>
<p class="lead">Welcome to knowledge is Power, a site dedicated to keeping you up-to-date
	on Web security and programing information you need to know.</p>
	
<?php include('includes/footer.html');
