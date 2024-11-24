import { useSpace } from '../Context/tourismContext'
import styles from './sharedStyles.module.css'
function Europa(){
    const {europadata} = useSpace()
    const {description,distance,images,name,travel} = europadata
    return(
        <div>
            <p className={styles.destinationname}>{name}</p>
            <p className={styles.destinationdescription}>{description}</p>
            <div className={styles.destinationdata}>
                <p className={styles.distancetext}>
                    <p className={styles.distancetext}>AVG DISTANCE</p>
                    <p className={styles.distance}>{distance.replace('km','')} MIL. KM</p>
                </p>
                <p>
                    <p className={styles.traveltext}>EST. TRAVEL TIME</p>
                    <p className={styles.travel}>{travel}</p>
                </p>
            </div>
        </div>
    )
}
export default Europa