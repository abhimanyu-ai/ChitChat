//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCaOnf5Ex1QvhM4GuMVCI85d-DKqw8f77o",
    authDomain: "chitchat-e1f9c.firebaseapp.com",
    databaseURL: "https://chitchat-e1f9c-default-rtdb.firebaseio.com",
    projectId: "chitchat-e1f9c",
    storageBucket: "chitchat-e1f9c.appspot.com",
    messagingSenderId: "143357977729",
    appId: "1:143357977729:web:430613fbe1632ddaf25980"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
roomname=localStorage.getItem("roomname");
function send() {
    message=document.getElementById('msg').value;
    firebase.database().ref(roomname).push({
          name:username,
          msg:message,
          like:0
    });
    document.getElementById('msg').value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['msg'];
like=message_data['like'];
name_with_tag="<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
message_wth_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: " +like+ "</span> </button><hr>";
row=name_with_tag + message_wth_tag + like_button + span_with_tag;
document.getElementById('output').innerHTML += row;
//End code
    } });  }); }
getData();
function updateLike(message_id) { 
    console.log("clicked on like button - " + message_id); 
button_id = message_id;
 likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
   console.log(updated_likes);
    firebase.database().ref(roomname).child(message_id).update({ like : updated_likes }); }
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location.replace("login.html");
}