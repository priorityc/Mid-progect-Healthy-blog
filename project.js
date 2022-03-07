
//geting the data
//inputPerson=document.querySelector('button')
let personName;
let personEmail;

func1 {
  if (personName.length==0) {
    alert('Please fill your name');
  }else{
    checkUserinputs();
  }
  }
document.querySelector('#subscribe').addEventListener('click',func1)
checkUserinputs = () => {
  let personName = document.getElementById('input1').value;
	let personEmail = document.getElementById('input2').value;
	if (personEmail.length == 0) {
		throw new Error('please provide an email address');
	} else if (userEntry.indexOf('@') === -1) {
		throw new Error('please provide a valid email address');
	}
	
};
document.querySelector('#button').innerHTML = `<h3 style="color:green"> Your email is: </h3>` + personEmail;
validateEntry = () => {
	
  try {
		checkUserinputs();
	} catch (error) {
		document.getElementById('console').innerHTML = `<h3 class="error"> Warning: </h3>` + error.message;
	}
};

document.getElementById('subscribe').addEventListener('click', validateEntry);




/*//turn data Jason into object
fetch('./posts.json')
  .then((res) => res.json()) 
  .then((data) => {
   //console.log(data);
  });


//store that data into local storige
 
funcCreatepost = () => {
  let tempPostData = JSON.parse(localStorage.getItem('data'))
  let tempPost1Data = '';
  tempPostData.map((nMD) => {
    tempPost1Data += `<div class="PostCard">
    <img
      src="${nMD.image1}"
    />
    <div class="postCardDetails">
      <h2>${nMD.image1}</h2>
      <p>${nMD.post}</p>
      </div>`;
  });
  document.querySelector('body').innerHTML = tempPostData;
};

funcDisplaycard*/
