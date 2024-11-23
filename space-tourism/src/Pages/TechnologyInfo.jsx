import styles from './TechnologyInfo.module.css'
function TechnologyInfo({technologydata,setTechnologyIndex}){
    const{description,images,name} = technologydata
    return(
        <>
            <div className={styles.techinfo}>           
                    <span className={styles.techbuttons}>
                        <span role='button' onClick={() => setTechnologyIndex(0)}>1</span>
                        <span role='button' onClick={() => setTechnologyIndex(1)}>2</span>
                        <span role='button' onClick={() => setTechnologyIndex(2)}>3</span>
                    </span>
                    <div className={styles.techcontent}>
                        <p>
                            <p className={styles.term}>The terminology...</p>
                            <p className={styles.techname}>{name}</p>
                        </p>
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