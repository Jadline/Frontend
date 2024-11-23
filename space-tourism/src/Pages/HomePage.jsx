import PageNav from "../Components/PageNav"
import styles from './HomePage.module.css'
function HomePage(){
    return(
        <div className={styles['home-container']}>
            <PageNav/>
            <div className={styles['home-content']}>
                <div className={styles.hometext}>
                    <p>
                        <span className={styles.spaceintro}>So, you want to travel to</span>
                        <p className={styles.space}>Space</p>
                        
                    </p>
                    <p className={styles['space-text']}> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore</p>
                </div>
                <div className={styles.exploreContent}>
                    <div className={styles.explore}>
                        <p>EXPLORE</p>
                    </div>
                </div>
               

            </div>
            </div>
    
    )
}
export default HomePage