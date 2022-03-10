
//geting the data



function validateForm() {
   personName=document.forms['myform']['fname'].value;
 if (personName == ('')){
    alert("Name must be filled out");

 }else personEmail = document.forms['myform']['e-mail'].value;
   
 if (personEmail.indexOf('@') == -1){
    alert("Email must be filled out");

 }else personCard = document.forms['myform']['creditCard'].value;

 if (personCard.length < 16) {
    alert("Please add valid card number");
  
}else security = document.forms['myform']['cvv'].value;
  
if (security.length < 3){
    alert("Please add valid security code");
  
}else Expdate = document.forms['myform']['exp-month'].value;
  
if (Expdate.indexOf('/') == -1) {
    alert("Please add valid expire date.");
}else 
password=alert(`Thank you you have been subscribed.Your password is 1245780p`);
 
}


function funcValidateConfirm() {
   const password=1245780&&('p')&&('#');
 if (password==('')){
  alert("Please enter the password");
 }else
  fetch(`./posts.json`)
  .then((res) => res.json())
  .then((data) => {
   document.querySelector("form").style.display="none";
   document.querySelector('h3').style.display="none";
   document.querySelector("#hiden").innerHTML=`<p>'${data[0].message}'</p>`
   document.querySelector("#img").innerHTML=`<img src='${data[1].image1}'>`
   document.querySelector("#post").innerHTML=`<p>'${data[2].post}'</p>`
 
 
  });  
}
  
