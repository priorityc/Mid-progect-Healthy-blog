
//geting the data

function validateForm() {
   personName=document.forms['myform']['fname'].value;
 if (personName == ('')){
    alert("Name must be filled out");
  }
   personEmail = document.forms['myform']['e-mail'].value;
   if (personEmail.indexOf('@') == -1){
    alert("Email must be filled out");
  }
}

//if payid func
/*paypal.Buttons({
  onCancel: function (data) {
    // Show a cancel page, or return to cart
  }
}).render('#paypal-button-container');

let element=document.querySelector('hiden');*/


//stake the data
fetch(`./posts.json`)
  .then((res) => res.json())
  .then((data) => {
     console.log(data);

   if (!localStorage.getItem('image1'));
   funcLocalData(data.items);
    }
    //funcCreateCards();
  );

   //console.log(image1);


  funcLocalData = (posts) => {
    let postData = [];
  
  posts.map((p) => {
      postData.push({
        image1: p.image1,
        post: p.post,
      });
    }
  )};