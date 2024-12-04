import  styles from './JobListings.module.css'
import Job from './Job'
import { useState } from 'react'

function JobListings({jobsdata,categories}){
    
    

    const[filtereddata,setfiltereddata] = useState(jobsdata)
   

    function removeFrontend(){
        const frontenddata = jobsdata.filter((job) => job.role !== 'Frontend')
        return frontenddata

    }
    function removeCss(){
        const cssdata = jobsdata.filter((job) => !job.languages.includes('CSS'))
        // console.log(cssdata)
        return cssdata
    }
    function removeJavascript(){
        const jsdata = jobsdata.filter((job) => !job.languages.includes('JavaScript') && !job.tools.includes('JavaScript'))
        console.log(jsdata)
        return jsdata
    }
   

    return(
       
        <div className={styles.joblistings}>
            {jobsdata.map((job) => <Job key ={job.id} job={job}/> )}          
        </div>)
        
}
export default JobListings