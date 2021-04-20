import React from 'react'
import styles from '../styles/SearchBar.module.css'

function SearchBar() {
    return (
        <div className={styles.search_container}>            
            <input
                className={styles.search_input}
                type="text"
                placeholder="Paste a link or search for a video"
            />
        </div>
    )
}

export default SearchBar
