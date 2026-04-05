function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name=="" || email=="" || message==""){
alert("All fields are required");
return false;
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
alert("Enter a valid email");
return false;
}

alert("Form submitted successfully!");
return true;

}