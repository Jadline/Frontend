import styles from './PageLoader.module.css'
function PageLoader(){
    return (
        <div className={styles.pageloader}>
            <div className={styles.spinnerContainer}>
                <div className={styles.spinner}></div>
            </div>

        </div>
    )
}
export default PageLoader