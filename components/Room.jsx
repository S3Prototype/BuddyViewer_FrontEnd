import React, {useState, useEffect, useContext} from 'react'
import styles from '../styles/Room.module.css'
import {SocketContext, socket} from '../context/socket';

import SearchBar from './SearchBar'
import VideoContainer from './VideoContainer'
import UserList from './UserList'
import InfoContainer from './InfoContainer'
import ReactPlayer from 'react-player'



const Room = () => {
    
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U')

    const updateUrl = (newUrl)=>{
        if(ReactPlayer.canPlay(newUrl))
            setVideoUrl(newUrl)
        else
            console.log("Cannot play it.")
    }

    const [isPlaying, setPlaying] = useState(false)
    
    useEffect(()=>{
        setPlaying(true)
    }, [videoUrl])

    return (
        <SocketContext.Provider value={socket}>
            <main>
                <SearchBar
                    updateUrl={updateUrl}
                />
                <div className={styles.ui_container}>
                    <section className={styles.player_container}>
                        <VideoContainer
                            isPlaying={isPlaying}
                            videoUrl={videoUrl}
                        />
                        <UserList/>
                    </section>
                    <section className={styles.info_container}>
                        <InfoContainer/>
                        {/* This will appear on the right side. Should be chat, search results and history. */}
                    </section>
                </div>
            </main>
        </SocketContext.Provider>
    )
}

export default Room
