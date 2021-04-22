const TEMP = {
    roomID: '12345'
}

export function play(videoData, socket){
    socket.emit('playPause', videoData, TEMP.roomID)
}