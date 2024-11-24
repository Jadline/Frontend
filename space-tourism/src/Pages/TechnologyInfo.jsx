import { useSpace } from '../Context/tourismContext'
import styles from './TechnologyInfo.module.css'
function TechnologyInfo(){
    const {technologydata,setTechnologyIndex,technologyIndex} = useSpace()
    const{description,images,name} = technologydata
    return(
        <>
            <div className={styles.techinfo}>           
                    <span className={styles.techbuttons}>
                        <span role='button' onClick={() => setTechnologyIndex(0)} className={`${technologyIndex === 0 ? styles.activebutton : ''}`}>1</span>
                        <span role='button' onClick={() => setTechnologyIndex(1)} className={`${technologyIndex === 1 ? styles.activebutton : ''}`}>2</span>
                        <span role='button' onClick={() => setTechnologyIndex(2)} className={`${technologyIndex === 2 ? styles.activebutton : ''}`}>3</span>
                    </span>
                    <div className={styles.techcontent}>
                        <div>
                            <p className={styles.term}>The terminology...</p>
                            <p className={styles.techname}>{name}</p>
                        </div>
                        <p className={styles.techdescription}>{description}</p>
                    </div>
            </div>
        
        <div className={styles.techImage}>
            <img src={images.portrait} alt={name}/>
        </div>
        
        </>
        
    )
}
export default TechnologyInfo