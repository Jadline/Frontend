import { NavLink } from "react-router-dom"
import styles from './DestinationNav.module.css'
function DestinationsNav(){
    return(
        <ul className={styles.marsnav}>
            <NavLink to='moon'>Moon</NavLink>
            <NavLink to='mars'>Mars</NavLink>
            <NavLink to='europa'>Europa</NavLink>
            <NavLink to='titan'>Titan</NavLink>
        </ul>
    )
}
export default DestinationsNav