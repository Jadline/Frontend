import styles from './Advices.module.css'
import AdviceItem from './AdviceItem'
function Advices (){
    return(
        <div className={styles['advices-container']}>
           {/* {advices?.map((advice) => <AdviceItem advice={advice} key={advice.id}/>)} */}
            <AdviceItem/>
        </div>
    )
}
export default Advices