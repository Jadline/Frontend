import styles from './Logo.module.css'
import { useNavigate } from 'react-router-dom'
function Logo(){
    const navigate = useNavigate()
    return(
        <div onClick={() => navigate('/')}>
             <img src='/shared/logo.svg' alt='logo' className={styles.logo}/>
        </div>
           
       
    )
}
export default Logo