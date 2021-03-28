function addUser() {
    username=document.getElementById('username').value;
    if(username == "") {
        alert("Please enter a username");
    }
    else {
        localStorage.setItem("username", username);
        window.location="chitchat-room.html";
    }
}