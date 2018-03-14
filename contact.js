/* JavaScript Form Validation Script */

function dataValidation() {
	/* if name input is empty */
	if (document.getElementById('name').value == "") {
		/*alert box appears */
		alert('Please enter your name');
		/* prevents the form from being submitted without any data validations being met. */
		return false;
	}
	
	/* variable storing the name and its value */
	var nameValidate = document.getElementById('name').value;
	/* if nameValdiate has numbers or special characters. Uses reg expressions */
	if(/[\d]/ && /[0-9]/g.test(nameValidate) )
	{	
		/* alert box appears */
        alert('Please enter a name without any special characters or numbers');
        return false;
    }
	
	/* variable storing the name of the form and the name input plus its value */
	var x=document.forms["contact_form"]["name"].value;
	/* if the length of the value entered in the name input is less than 2 characters */
	 if ( x.length < 2) 
	{
	  /*alert box appears */
	  alert("Please enter a name more than 2 characters");
	  return false;
	}
	
	/* if email input is empty */
	if (document.getElementById('email_address').value == "") {
		/* alert box appears */
		alert('Please enter your email address');
		return false;
	}
		
	/* variable storing the name of the form and the name input plus its value */	
	var x=document.forms["contact_form"]["email"].value;
	/* variable storing @ symbol */
	var atpos=x.indexOf("@");
	/*variable storing . symbol */
	var dotpos=x.lastIndexOf(".");
	/* if the @ and . symbols are not in the right position and not present */
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
		  /* alert box appears */
		  alert("Enter a valid email address");
		  return false;
	}
	
	/* If message textarea is empty */
	if (document.getElementById('message').value == "") {
		/* alert box appears */
		alert('Please type in a message');
		return false;
	}
	
	/* variable storing the name of the form and the message textarea plus its value */	
	var x=document.forms["contact_form"]["message"].value;
	/* if length of text in message textarea is less than 10 characters */
	if ( x.length < 10) {
		/* alert box appears */
		alert('Please enter a message more than 10 characters');
		return false;
	}
	
	/* if validations have been met, the return value is true and when the user clicks the submit
	button, the message box below will appear */
	alert('message sent');
	
	return true;
}