import { useSpace } from '../Context/tourismContext'
import styles from './sharedStyles.module.css'
function Mars(){
    const {marsdata} = useSpace()
    const {description,distance,images,name,travel} = marsdata
    return(
        <div className={styles.marscontainer}>
            <p className={styles.destinationname}>{name}</p>
            <p className={styles.destinationdescription}>{description}</p>
            <div className={styles.destinationdata}>
                <p>
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
export default Mars