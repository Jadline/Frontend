import { Link } from "react-router-dom";
import styles from './PageNav.module.css'
import Logo from "./Logo";
import Line from "./Line";
function PageNav(){
    return(
        <div className ={styles.header}>
            <Logo/>
            <ul className ={styles.navigation}>
                <Link to='/'>00 Home</Link>
                <Link to='/crew'>01 Crew</Link>
                <Link to='/destination'>02 Destination</Link>
                <Link to='/technology'>03 Technology</Link>
            </ul>
        </div>
    )
}
export default PageNav