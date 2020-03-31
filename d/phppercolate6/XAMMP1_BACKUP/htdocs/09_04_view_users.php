<?php # Script 9.4 - view_users.php
$page_title = 'View the current user';
include ('includes/header.html');
ini_set('display_errors',1);
echo '<h1 id="mainhead">Registered Users</h1>  <h2>Script 09_04</h2>';

//connect to data and fetch any results
//
//error connecting to databse
require('includes/mysqli_connect.php');
//

$q = "SELECT CONCAT(last_name,' , ', first_name) AS name, 
DATE_FORMAT(registration_date, '%M %D, %Y') AS dr FROM users 
ORDER BY registration_date ASC";
$r = @mysqli_query ($dbc, $q);

//print found results
if ($r){
  echo '<table align="center" cellspacing="3" cellpadding="3" width="75%">
    <tr><td align="left"><b>Name</b>Date Registered</b></td></tr>';
	
         while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
		  echo '<tr><td align="left">' . $row['name'] . '</td><td align="left">' . $row['dr'] . '</td></tr>';
		  }
		  
echo '</table>';
mysqli_free_result ($r);

//complete main conditional

	}else{
	echo '<p class="error">The current users could not be retrieved.
	We apologize for any inconvenience.</p>';
	
	echo '<p>' . mysqli_error($dbc) . '<br /><br />Query: ' . $q . '</p>';
	} // End of if ($r) IF.
	
	//close database connection
	mysqli_close($dbc);

include('includes/footer.html');
?>