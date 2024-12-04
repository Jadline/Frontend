import styles from './Job.module.css'

function Job({job}){
    // console.log(job)
    const {
        company,
        contract,
        featured,
        id,
        position,
        languages,
        location,
        logo,
        postedAt,
        role,
        level,
        tools,
        newjob
    } = job
    // console.log(job)
    
    return (
    <li className={styles.job}>
        <div className={styles.jobdata}>
        <img src={logo} className={styles.employeeImage}/>
        <div className={styles.jobdetails}>
            <div className={styles.skillsfilter}>
                <p>{company}</p>
                <p className={newjob && styles.new}>{newjob ? 'new' : ""}</p>
                <p className={featured  && styles.featured}>{featured ? 'featured' : ""}</p>
            </div>
            <p className={styles.role}>{position}</p>
            <div className={styles.timeandlocation}>
                <p>{postedAt}</p>
                <p>{contract}</p>
                <p>{location}</p>
            </div>
        </div>
        </div>
        <div className={styles.skillset}>
            <div>
                <p role='button'>{role}</p>
                <p role='button'>{level}</p>
            </div>
            <div>
                {languages.map((language,index) => <p role='button' key ={index}>{language}</p>)}
            </div>
            <div>
                {tools.map((tool,index) => <p role='button' key={index}>{tool}</p>)}
            </div>
        </div>
    </li>)

}
export default Job