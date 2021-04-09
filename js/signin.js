<script> 
function validate()                                    
{ 
    var firstname = document.forms["signin"]["Name"];  
	var lastname = document.forms["signin"]["Name"];
	var username = document.forms["signin"]["Name"];	
    var Email = document.forms["signin"]["EMail"];    
    var contactnumber = document.forms["signin"]["Telephone"];  
    var password = document.forms["signin"]["Password"];   
   
    if (firstname.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        firstname.focus(); 
        return false; 
    } 
   
   if (lastname.value == "")                                  
    { 
        window.alert("Please enter your lastname"); 
        lastname.focus(); 
        return false; 
    } 
	
	if (username.value == "")                                  
    { 
        window.alert("Please enter your username"); 
        username.focus(); 
        return false; 
    } 
       
    if (Email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address"); 
        Email.focus(); 
        return false; 
    } 
    if (contactnumber.value == "")                           
    { 
        window.alert("Please enter your contact number"); 
        contactnumber.focus(); 
        return false; 
    } 

   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 

    return true; 
}</script>