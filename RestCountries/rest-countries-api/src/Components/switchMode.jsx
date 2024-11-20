import styles from './switchMode.module.css'
import { CountryContext } from '../App'
import { useContext } from 'react'
function SwitchMode(){
    const {mode,setMode} = useContext(CountryContext)
    function handleToggle(){
        setMode(curmode => !curmode)
    }
    
    return(
        <div className={`${styles.container} ${mode && styles.darkmode}` }>
            <h1>Where in the world?</h1>
            <button className={styles.modeContainer} onClick={handleToggle}>
                {!mode ? <img src='/night-mode.png' alt='night mode icon'/> : <img src='/brightness.png' alt='light mode'/>}
                <span className={mode && styles.darkmode}>{mode ? 'Light mode' : 'Dark Mode'}</span>
            </button>
        </div>
    )
}
export default SwitchMode