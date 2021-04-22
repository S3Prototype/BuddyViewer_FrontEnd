import React, {useRef} from 'react'
import styles from '../styles/SearchBar.module.css'

function SearchBar(props) {
    
    const keyDown = (e)=>{
        const code = (e.keyCode ? e.keyCode : e.which);
        if(code == 13) { //Enter keycode
            props.updateUrl(inputRef.current.value)        
        }
    }

    const inputRef = useRef(null)
    
    return (
        <div className={styles.search_container}>            
            <input
                ref={inputRef}
                className={styles.search_input}
                type="text"
                placeholder="Paste a link or search for a video"
                onKeyDown={keyDown}
            />
        </div>
    )
}

export default SearchBar
