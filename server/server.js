var serverCapacity = 2;
var playerCount = 0;
var playerList = [];
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 1234;
let app = express();
let server = http.createServer (app);
let io = socketIO(server);

io.on ('connection', (socket) =>{
    if (playerCount => serverCapacity)
    {socket.emit ('kicked')} 
    else {playerCount ++;
        socket.emit ('join');
        playerList.push(socket);
    
    }
    
    socket.on ('disconnect' , () => {
if (playerList.includes(socket)){playerCount --;
}
    }); 
});

app.use(express.static(publicPath));

server.listen(port, () => {
console.log('Server is up');

});
