//validation

  function cFunction() {
	var firstName = document.forms["form1"]["first-name"];
	var lastName = document.forms["form1"]["surname"];
	var checkEmail = document.forms["form1"]["mail"];
    var phone = document.getElementById("telephone");
	var message = document.forms["form1"]["message"];

	if (firstName.value == "" || firstName.length < 2) {
		window.alert("Please enter your first name.");
		firstName.focus();
		return false;
	}

	if (lastName.value == ""|| lastName.length < 2) {
		window.alert("Please enter your last name.");
		lastName.focus();
		return false;
	}
    
	/*function testEmailAddress(checkEmail) {
		// check for @
		var at = checkEmail.indexOf("@");
		if(at < 1){
			window.alert("Invalid email")
			return false} ;
	
		var fullStop = checkEmail.indexOf(".");
		if(fullStop <= at + 2) {
			window.alert("Invalid email")
		    return false
		};
	
		// check that the dot is not at the end
		if (fullStop === checkEmail.length - 1){
			window.alert("Invalid email")
			return false
		};
	
		return true;
	}
*/


	if (checkEmail.value == "" || checkEmail.value.indexOf("@") == -1) {
		window.alert(
		  "Please enter a valid e-mail address.");
		checkEmail.focus();
		return false;
	}
	
	if(phone == ""){
		window.alert(
			"Please enter a valid phone number.");
		  return false;
	  }

	if (message.value == ""|| message.value.length <= 20) {
		window.alert("Please enter a message with 20 characters or more than 20 characters");
		message.focus();
		return false;
	}
	
   //modal open

  document.querySelector('#finish').addEventListener("click", function() {
	document.querySelector('.container-modal').style.display = "block";
  });
 
  //modal close
  document.querySelector('.container-modal').addEventListener("click", function() {
	document.querySelector('.container-modal').style.display = "none";
  });
  
  //display on console
	console.log(firstName.value);
	console.log(lastName.value)
	console.log(checkEmail.value);
	console.log(phone.value);
	console.log(message.value);

	return true;
}
  