//Firebase Links
var firebaseConfig = {
    apiKey: "AIzaSyCaOnf5Ex1QvhM4GuMVCI85d-DKqw8f77o",
    authDomain: "chitchat-e1f9c.firebaseapp.com",
    databaseURL: "https://chitchat-e1f9c-default-rtdb.firebaseio.com",
    projectId: "chitchat-e1f9c",
    storageBucket: "chitchat-e1f9c.appspot.com",
    messagingSenderId: "143357977729",
    appId: "1:143357977729:web:430613fbe1632ddaf25980"
  };
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome, " + username + "!";

function addRoom() {
      roomname = document.getElementById("roomname").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
      });

      localStorage.setItem("roomname", roomname);

      window.location = "chitchat-page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Roomname" + Room_names);
     row="<div class='room_name' id=" + Room_names + "onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
     document.getElementById('output').innerHTML=row;
     //End code
     });});}
getData();
function redirect(name) {
     console.log(name);
     localStorage.setItem("roomname", name);
     window.location="chitchat-page.html";
}
function logout() {
     localStorage.removeItem("username");
     localStorage.removeItem("roomname");
     window.location="login.html";
}