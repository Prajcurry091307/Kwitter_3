var firebaseConfig = {
    apiKey: "AIzaSyCAp8sXb7bGXiADklGUsOyiyT31Di-3el0",
    authDomain: "kwitter-c2f48.firebaseapp.com",
    databaseURL: "https://kwitter-c2f48-default-rtdb.firebaseio.com",
    projectId: "kwitter-c2f48",
    storageBucket: "kwitter-c2f48.appspot.com",
    messagingSenderId: "658186658179",
    appId: "1:658186658179:web:ecee3c6518770d1c5716b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
//YOUR FIREBASE LINKS
var user_name= localStorage.getItem("user_name");
var room_name= localStorage.getItem("room_name");

function send()
{
  var msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message: msg,
    like:0
  });
 document.getElementById("msg").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
