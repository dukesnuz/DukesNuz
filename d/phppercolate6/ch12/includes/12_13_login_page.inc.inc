<?php #Script 12.13 - login_page.inc.php
 $page_title='Login';

include('header.html');

if(isset($errors) && !empty($errors))

{

echo '<h1>Error!</h1>

<p class="error"> The following error(s) occurred:<br />';

foreach ($errors as $msg)
{
echo " - $msg<br />\n";

}
echo '</p><p>Please try again.</p>';
}

?>
<br />
<h1>Login Scripts 12.12-12.13 Using sessions more securly with $_SESSION['agent']</h1>
<br />
<h2 class="error">Try it out</h2>
<a href="http://www.dukesnuz.com:81/09_04_pursuit.php">Sign up here</a>

<form action ="12_012_login.php" method="post">
    <p>Email Address: <input type="text" name="email"/></p>
	<p>password: <input type="password" name="pass"/></p>  
    <p><input type="submit" name="submit" value="Login" class="button"/></p>
  </form>
  
  
  
  
 <?php include('footer.html'); ?>