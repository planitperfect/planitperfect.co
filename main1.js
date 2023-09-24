// Initialize Firebase (ADD YOUR OWN DATA)

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDfmU2breylpXxeW1zeJeM8k0TP6blNB38",
    authDomain: "date-store-c8a8e.firebaseapp.com",
    databaseURL: "https://date-store-c8a8e-default-rtdb.firebaseio.com",
    projectId: "date-store-c8a8e",
    storageBucket: "date-store-c8a8e.appspot.com",
    messagingSenderId: "102535986421",
    appId: "1:102535986421:web:aa8efa7d14716861f7d9bc",
    measurementId: "G-VH8SRV35T8"
  };
    

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var event = getInputVal('event');
  var phone = getInputVal('phone');
  var sd = getInputVal('sd');
  var ed = getInputVal('ed');

  // Save message
  saveMessage(name, company, event, phone,  sd,ed);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, event, phone,sd,ed){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    event:event,
    phone:phone,
    sd:sd,
    ed:ed,
  });
}
