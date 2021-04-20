import React from 'react'
import styles from '../styles/Room.module.css'

import SearchBar from './SearchBar'
import VideoContainer from './VideoContainer'
import UserList from './UserList'
import InfoContainer from './InfoContainer'

const Room = () => {
    return (
        <main>
            <SearchBar/>
            <div className={styles.ui_container}>
                <section className={styles.player_container}>
                    <VideoContainer/>
                    <UserList/>
                </section>
                <section className={styles.info_container}>
                    <InfoContainer/>
                    {/* This will appear on the right side. Should be chat, search results and history. */}
                </section>
            </div>
        </main>
    )
}

export default Room
