document.addEventListener('DOMContentLoaded', function () {
    const agreeCheckbox = document.getElementById('agree-checkbox');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        if (!agreeCheckbox.checked) {
            event.preventDefault(); // Prevent form submission if checkbox is not checked
            alert('Please agree to the terms and conditions.');
        }
    });
});











// Initialize Firebase (ADD YOUR OWN DATA)

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDPBn8-Col7JnBpd0e_NZdA2LDdmUdZuu0",
    authDomain: "pip-vendor-registration.firebaseapp.com",
    databaseURL: "https://pip-vendor-registration-default-rtdb.firebaseio.com",
    projectId: "pip-vendor-registration",
    storageBucket: "pip-vendor-registration.appspot.com",
    messagingSenderId: "863382387895",
    appId: "1:863382387895:web:a7452057e070434839a132",
    measurementId: "G-JK3KXSM9YM"
  };
 
    

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages_1');

// Listen for form submit
document.getElementById('form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    console.log("done");
  e.preventDefault();

  // Get values

  
 


    var name = getInputVal('name');
    var company = getInputVal('company');
    var number = getInputVal('number');
    var email = getInputVal('email');
    var type_of_service = getInputVal('type of service');
    var price = getInputVal('price');
    var description = getInputVal('description');
    



  

  // Save message
  saveMessage(name, company, number,email,type_of_service,price,description);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

  // Clear form
 // document.getElementById('form').reset();
 window.location.href = "thankyou.html";
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, number,email,type_of_service,price,description){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    companyName:company,
    number:number,
    email:email,
    typeOfService:type_of_service,
    price:price,
    description:description,
  });
}


