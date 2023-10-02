
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDU9wnOT0XRlJUwSYhw_6EUwNwp11Kaj2M",
    authDomain: "login-authentication-c28e7.firebaseapp.com",
    projectId: "login-authentication-c28e7",
    storageBucket: "login-authentication-c28e7.appspot.com",
    messagingSenderId: "166376370164",
    appId: "1:166376370164:web:c46846408fd813d813d3a1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth= getAuth()

  //getting all the objects of html
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var email = document.getElementById("email");
  var passwords = document.getElementById("password");
  var cpassword = document.getElementById("cpassword");

  // making a function for storing data
  window.signup =function(e){
    if (cpassword.text!=passwords.text){
      alert('Passwords do not match');
      return
    }
    e.preventDefault();
    var obj = {
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        passwords:passwords.value,
    }
    createUserWithEmailAndPassword(auth, obj.email,obj.passwords)
    .then(function(success){
        alert("SignUp Successful..");
        window.location.replace('login.html');
    }) 
    .catch(function(err){
        alert("error" + err);
    })
    console.log(obj)

  };
