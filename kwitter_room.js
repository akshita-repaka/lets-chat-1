const firebaseConfig = {
    apiKey: "AIzaSyALKYSq5TV7XvZ4apmezmvQ_gJ394htOig",
    authDomain: "lets-chat-936ad.firebaseapp.com",
    databaseURL: "https://lets-chat-936ad-default-rtdb.firebaseio.com",
    projectId: "lets-chat-936ad",
    storageBucket: "lets-chat-936ad.appspot.com",
    messagingSenderId: "503898475364",
    appId: "1:503898475364:web:a5bc915b510e46ffa04871"
  };
  
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE



user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div<hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"});

      localStorage.setItem("room_name", room_name);
  
      window.location = "kwitter_page.html";
  }

  function redirectToRoomName(name)
  {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }

  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }