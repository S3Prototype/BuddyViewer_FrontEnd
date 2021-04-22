import socketio from "socket.io-client";
import React from 'react'


export const socket = socketio.connect('http://localhost:8092',
    {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true
        }
    }
)

socket.on('connect', _=>{
    console.log('We have connected at id:', socket.id)
})

// socket.emit('joinTestRoom', {roomID:'12345'})


export const SocketContext = React.createContext();