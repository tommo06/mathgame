let socket = io();

var name = window.prompt ('Enter Your Name' , ' ');


socket.on('connect' , function() {
    console.log("Connected to Sevrer");
});

socket.on('disconnect' , function() {
    console.log("Disconnected From Server");
});

socket.on ('kicked')
function buttonPress()
{

    socket.emit('clcik' , {
     name: name
 });   
}