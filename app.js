var regex = /[A-Za-z]+/;
const password = document.getElementById("password-text");
const passwordConfirmed = document.getElementById("password-text-confirmed");
const form = document.getElementById("form");
const error = document.getElementById("error");
const telephoneText = document.getElementById("telephone-text");
form.addEventListener("submit", (e) => {  
  passwordIssues = [];
  if(password.value !== passwordConfirmed.value){
    password.style.border = "1.5px solid #ff0000";
    passwordConfirmed.style.border = "2px solid #ff0000";
  	passwordIssues.push("password must be equal");
  }
  if(passwordIssues.length !== 0){
    e.preventDefault();
    error.innerHTML = `${"Error, "}${passwordIssues.join(", ")}${" *"}`;
    console.log(passwordIssues);
  }
});



