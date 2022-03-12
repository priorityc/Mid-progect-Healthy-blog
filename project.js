
//geting the data


function validateForm() {
   personName = document.forms['myform']['fname'].value;
   if (personName == ('')) {
      alert("Name must be filled out");

   } else personEmail = document.forms['myform']['e-mail'].value;

   if (personEmail.indexOf('@') == -1) {
      alert("Email must be filled out");

   } else personCard = document.forms['myform']['creditCard'].value;

   if (personCard.length < 16) {
      alert("Please add valid card number");

   } else security = document.forms['myform']['cvv'].value;

   if (security.length < 3) {
      alert("Please add valid security code");

   } else 
      Expdate = document.forms['myform']['exp-month'].value;

      if (Expdate.indexOf('/') == -1) {
         alert("Please add valid expire date.");
      }else alert(`Your Password is ${generateP()}`);
      
   }
   //console.log(pass);
      //function generate randow password
      function generateP(length=8) {//setting the lenght of the password parametar
        charachters='0123456789@#ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //string whit charachters
        let password = '';//empti conteiner whit label password

         for (i = 1; i <=length; i++) { //loop thrugh the lenght 
             let generator =Math.floor(Math.random()*charachters.length)+1; //generate random charachters by the lenght 
             password += charachters.charAt(generator);//add random letters
             
         }
          return password;
         }
   
                    
         funcValidateConfirm=() =>{
            document.forms['myform']['fname'].password;
            fetch(`./posts.json`)
            .then((res) => res.json())
            .then((data) => {
                  document.querySelector("form").style.display = "none";
                  document.querySelector('h3').style.display = "none";
                  document.querySelector("#hiden").innerHTML = `<p>'${data[0].message}'</p>`
                  document.querySelector("#img").innerHTML = `<img src='${data[1].image1}'>`
                  document.querySelector("#post").innerHTML = `<p>'${data[2].post}'</p>`
            
               });
            }
         
