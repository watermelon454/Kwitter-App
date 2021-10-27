
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyB_Ps20ZoUPl79UNAxyKQlWQrFy6TXXqvU",
  authDomain: "classtest-936a8.firebaseapp.com",
  databaseURL: "https://classtest-936a8-default-rtdb.firebaseio.com",
  projectId: "classtest-936a8",
  storageBucket: "classtest-936a8.appspot.com",
  messagingSenderId: "677917258198",
  appId: "1:677917258198:web:fb125a8704cd9c5945f477",
  measurementId: "G-1FFXRL9D2L"
};
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
})
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData(){
firebase.database().ref("/").on('value',function(snapshot){
document.getElementById("output").innerHTML="";snapshot.array.forEach(function(childSnapshot){
childKey=childSnapshot.key;
Room_names=childKey;
console.log("room name -" +Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div> <hr>";
document.getElementById("output").innerHTML +=row;

}) 

  

})
}

getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}





function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
