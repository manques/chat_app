var socket = io.connect('http://localhost:4000/');


//Query DOM
var username = document.getElementById('username');
var message = document.getElementById('message');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');
//Emit Events
btn.addEventListener('click', function(){
  socket.emit('chat', {
    message : message.value,
    username : username.value
  });
});
//Typing Event

message.addEventListener('keypress', function(){
  socket.emit('typing' , username.value );
});
//Listen for Events
socket.on('chat', function(data){
  feedback.innerHTML = '';
  output.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
   feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
