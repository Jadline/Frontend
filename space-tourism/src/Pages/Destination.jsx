import { Outlet } from "react-router-dom"
import DestinationsNav from "../Components/DestinationNav"
import PageNav from "../Components/PageNav"
import styles from './Destination.module.css'
import { useLocation } from "react-router-dom"
import { useEffect,useState} from "react"

function Destination(){
    const [imgSrc,setImgSrc] = useState("/destination/image-moon.png")
    const location = useLocation()
    const pathSegments = location.pathname.split("/").filter(Boolean); // Ensure we always get a valid array
    useEffect(() => {
    if (pathSegments.length === 1 && pathSegments[0] === "destination")
        setImgSrc("/destination/image-moon.png")
    if(pathSegments.length > 1 && pathSegments[1] === 'moon')
        setImgSrc("/destination/image-moon.png") ;
    if(pathSegments.length > 1 && pathSegments[1] === 'mars')
        setImgSrc("/destination/image-mars.png") ;
  if(pathSegments.length > 1 && pathSegments[1] === 'europa')
    setImgSrc("/destination/image-europa.png") ;
  if(pathSegments.length > 1 && pathSegments[1] === 'titan')
    setImgSrc("/destination/image-titan.png");

    },[location,pathSegments])


  

    return(
        <div className={styles.destinationContainer}>
        <PageNav/>
            <p className={styles.destinationName}>01 Pick your destination</p>
            <div className={styles.marsnav}><DestinationsNav/></div>
            <div className={styles['destination-content']}>
                <div className={styles.destinationImage}>
                    <img src={imgSrc} alt=''  className={styles.destimg}/>
                    
                </div>
                
                <div className={styles.contentdata}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Destination