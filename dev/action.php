<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET

  // define variables and set to empty values
    $nameErr = $emailErr = $companyErr = $urlErr = $commentErr = "";
    $name = $email = $company = $url = $comment = "";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") { 

    $name= htmlspecialchars($_POST['Name']);
    $email  = htmlspecialchars($_POST['Email']);

    echo  $name, ' ', $email;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["Name"])) {
        $nameErr = "Name is required";
        } else {
        $name = test_input($_POST["Name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
            $nameErr = "Only letters and white space allowed";
        }
        }
    
        if (empty($_POST["Company"])) {
        $companyErr = "";
        } else {
        $company = test_input($_POST["Name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/",$company)) {
            $companyErr = "Only letters and white space allowed";
        }
        }
    
        if (empty($_POST["Email"])) {
        $emailErr = "Email is required";
        } else {
        $email = test_input($_POST["Email"]);
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
        }
    
        if (empty($_POST["URL"])) {
        $url = "";
        } else {
        $url = test_input($_POST["URL"]);
        // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
        if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
            $urlErr = "Invalid URL";
        }
        }
    
        if (empty($_POST["Comment"])) {
        $comment = "";
        } else {
        $comment = test_input($_POST["Comment"]);
        }
    
            
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

?>