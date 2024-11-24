import styles from './CrewInfo.module.css'
import { useSpace } from "../Context/tourismContext"
function CrewInfo(){
    const {crewdata,setIndex} = useSpace()
    const {role,bio,name,images} = crewdata
    return(
        <>
        
        <div className={styles.crewcontent}>
            <h1 className={styles.crewintro}>02 MEET YOUR CREW</h1>
            <p className={styles.role}>
                {role}
            </p>
            <p  className={styles.name}>{name}</p>
            <p  className={styles.bio}>{bio}</p>
            <div className={styles.crewbuttons}>
                <span role='button' onClick={() => setIndex(0)}>

                </span>
                <span role='button' onClick={() => setIndex(1)}></span>
                <span role='button' onClick={() => setIndex(2)}></span>
                <span role='button' onClick={() => setIndex(3)}></span>
            </div>
        </div>
        <div className={styles.crewImage}>
            <img src={images.png} alt={name}/>
        </div>
        </>
    )
}
export default CrewInfo