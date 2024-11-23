import styles from './AdviceItem.module.css'
import {useState} from 'react'

const tempadvice = {
    id : 0,
    advice : 'Obedience is better than sacrifice'
}
function AdviceItem(){
    const [advice,setAdvice] = useState(tempadvice)

       
    async function fetchAdvice(){
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        setAdvice(data.slip)
    }
    

    return(
        <li className={styles.adviceContent}>
            <p className={styles.adviceid}>ADVICE #{advice.id}</p>
            <p className={styles.advice}>&ldquo; {advice.advice} &rdquo;</p>
            <img src='/images/pattern-divider-desktop.svg' alt='divider' className={styles.image}/>
            {/* <svg className={styles.divider} width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg> */}
           <button className={styles.nextButton} onClick={fetchAdvice}>
           <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
       </button>
        </li>
    )
}
export default AdviceItem