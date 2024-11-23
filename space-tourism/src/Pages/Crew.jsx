import PageNav from "../Components/PageNav"
import styles from './Crew.module.css'
import CrewInfo from "./CrewInfo"
function Crew({crewdata,setIndex}){
    console.log(crewdata)
    return(
        <div className={styles.crewcontainer}>
            <PageNav/>
           
            <div className={styles.crewdatainfo}>
                <CrewInfo crewdata={crewdata} setIndex={setIndex}/>
            {/* {crewdata.map((crew,index) => <CrewInfo key={index}/>)} */}
            </div>
            
        </div>
    )
}
export default Crew