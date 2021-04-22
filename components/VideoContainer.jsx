import React, {useState, useEffect, useContext} from 'react'
import styles from '../styles/VideoContainer.module.css'
import ReactPlayer from 'react-player'
import {SocketContext} from '../context/socket';

function VideoContainer(props) {

    const socket = useContext(SocketContext)
    console.log(socket.id)

    function generateData(){
        return {
            videoID: props.videoUrl,
            videoSource: 0,
            videoTime: ReactPlayer.getCurrentTime(),
            playRate: 1,
            videoState: 1,
            videoDuration: ReactPlayer.getDuration(),
            isHost: false
        }
    }

    return (
        <div className={styles.video_container}>
            <ReactPlayer 
                className={styles.player}
                url={props.videoUrl}
                playing={true}
                muted={true}
                controls={true}
            />
            <button onClick={()=>{
                    console.log("On play")
                    socket.emit('playPauseTest')}
                }>Play</button>
        </div>
    )
}

export default VideoContainer
