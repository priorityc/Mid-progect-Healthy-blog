
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
      }else alert(`Your Password is ${showconfirm()}`);
      
   }
   console.log(pass);
      //function generate randow password
      function generateP() {
         pass=('');
         letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
         string='ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                 '0123456789@#$';
         numbers = '0123456789@#$'
          for (i = 1; i <= 8; i++) {
             string = letters.charAt();
             Math.floor(Math.random()
                         * str.length + 1);
            
         }
           
         return pass;
     }

 
         /*let password = string; //set variable for pass
         let string = "ABCDEFGHIGKLMNOPQRSTUVWXYZ" + "abcdefghigklmnopqrstuvwxyz1234567890"; //string leters and numbers possible to use
         for (i = 1; i >= 8; i++) { //using for loop to loop throu the process over and over again
            let generator = Math.floor(Math.random() //using random number generator of our string adding one
               * string.length + 1);
         password+= string.charAt(generator); //combinatio
         //console.log(showconfirm);
           }
          
         }
   
                    
          /*Fech_post =() =>{
            if (password) {
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
         }*/
