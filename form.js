//validation
function cFunction(){
  var name = document.getElementById("first-name").value;
  var lastName = document.getElementById("surname").value;
  var phone = document.getElementById("telephone").value;
  var checkEmail = document.getElementById("mail").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  error_message.style.padding = "10px";
  
  var errorText;

  if(name.length < 2){
    errorText = "Please Enter valid Name";
    error_message.innerHTML = errorText;
    return false;
  }

  else if(lastName.length < 2){
    errorText = "Please Enter valid Name";
    error_message.innerHTML = errorText;
    return false;
  }
  else if(isNaN(phone) || phone.length != 10){
    errorText = "Please Enter valid Phone Number";
    error_message.innerHTML = errorText;
    return false;
  }
  else if(checkEmail.indexOf("@") == -1){
    errorText = "Please Enter valid Email";
    error_message.innerHTML = errorText;
    return false;
  }
  else if(message.length <= 20){
    errorText = "Please Enter More Than 20 Characters";
    error_message.innerHTML = errorText;
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
  console.log(name);
  console.log(lastName)
  console.log(checkEmail);
  console.log(phone);
  console.log(message);
  return true;
}
