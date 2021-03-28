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
document.getElementById("username").innerHTML = "Welcome, " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
