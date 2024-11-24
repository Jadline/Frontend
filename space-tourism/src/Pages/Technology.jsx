import PageNav from "../Components/PageNav"
import styles from './Technology.module.css'
import TechnologyInfo from "./TechnologyInfo"

function Technology(){
    return(
        <div className={styles['technology-container']}>
            <PageNav/>
               <h1 className={styles.spaceintro}>03 SPACE LAUNCH 101</h1> 
            <div className={styles.technologydata}>
                <TechnologyInfo />
            </div>
        </div>
    )
}
export default Technology