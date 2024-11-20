import styles from './Country.module.css'
import { CountryContext } from '../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


function Country({country}){
    const navigate = useNavigate()
    function handleNavigation(name){
        navigate(`/CountryDetails/${name}`)
    }
    const {mode} = useContext(CountryContext)
   
    return(
        <div className={`${styles.countryitemcontainer} ${mode && styles.darkmode}`} onClick={() => handleNavigation(country.name)}>
            <img src={country.flags.png}/>
            <div>
            <p className={styles.name}>{country.name}</p>
            <p className={styles.population}><span>Population:</span> {country.population.toLocaleString()}</p>
            <p className={styles.region}><span>Region:</span> {country.region} </p>
            <p className={styles.capital}><span>Capital:</span> {country.capital}</p>
            </div> 
        </div>
    )
}
export default Country