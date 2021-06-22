var firebaseConfig = {
      apiKey: "AIzaSyBdYHWucpsklc-rNWkwMPVz3EQBpFSPInU",
      authDomain: "class-1f7bd.firebaseapp.com",
      databaseURL: "https://class-1f7bd-default-rtdb.firebaseio.com",
      projectId: "class-1f7bd",
      storageBucket: "class-1f7bd.appspot.com",
      messagingSenderId: "1058387974734",
      appId: "1:1058387974734:web:749a756bc620d6263d411f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html"
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room name - " + Room_names); 
      row = "<div class='room_name' id=" + Room_names+ " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      });
});
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}