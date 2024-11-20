import styles from './CountryContainer.module.css'
import Country from './Country'
import { useContext } from 'react'
import { CountryContext } from '../App'


function CountryContainer(){
    const {countries,query,region,mode} = useContext(CountryContext);

    const filteredCountries = countries.filter((country) => {
        
        const regionfilter = region ? country.region.toLowerCase().includes(region) : true;
        const queryfilter = query ? country.name.toLowerCase().includes(query.toLowerCase()) : true;
        
        return regionfilter && queryfilter
    })
  
    return(
        <div className={`${styles.countriescontainer} ${mode && styles.darkmode}`}>
            {filteredCountries.map((country,index) => <Country key={index} country={country}/>)}
        </div>
    )
}
export default CountryContainer