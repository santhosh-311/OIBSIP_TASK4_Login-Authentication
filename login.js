import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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
  const auth= getAuth();

  //getting all the objects of html
  var email = document.getElementById("email");
  var password =  document.getElementById("password");
  var message = document.getElementById("welcome-box");

  window.login = function(e){
    e.preventDefault();
    var obj = {
        email: email.value,
        password : password.value
    };
    signInWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        var user=auth.currentUser
        console.log(user.uid)
        alert("Login Successfully");
        var x=document.getElementById('box')
        // document.getElementsByClassName('box').style.background='#fff';
        // message.style.display="border-box";
        x.style.display='none'
        var y=document.getElementById('welcome-box')
        y.style.display='block'       
        var w=document.getElementById('user')
        w.innerHTML=obj.email.split('@')[0]
        
    })
    .catch(function(err){
        alert("Login error "+ err);
    })
    console.log(obj);
  }
  window.logout = function(e){
    window.location.replace('login.html')
  }
