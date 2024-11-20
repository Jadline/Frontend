import SwitchMode from "./switchMode";
import { useParams } from "react-router-dom";
import styles from './CountryDetails.module.css'
import { useContext } from "react";
import { CountryContext } from "../App";
import { useNavigate } from "react-router-dom";

function CountryDetails(){
    const {countries,mode} = useContext(CountryContext)
    const {countryname} = useParams()
    const navigate = useNavigate()
    const currentCountry = countries.find((country) => country.name === countryname)
    let languages = ''
    let currencies =''
    currentCountry.languages.forEach((language,index) => {
        languages += language.name
        if(index < currentCountry.languages.length -1){
            languages += ','
        }
    })
    currentCountry.currencies.forEach((currency,index) => {
        currencies += currency.name 
        if(index < currentCountry.currencies.length-1){
            currencies+= ','
        }
    })
    console.log(currentCountry)
    return(
    <div >
        <SwitchMode/>
        <button className={styles.homebutton} onClick={() => navigate('/')}>&larr; Back</button>
        <div className={styles.detailscontainer}>
            <div>
            <img src={currentCountry.flags.png} alt={currentCountry.name}/>
            <p className={styles.name}>{currentCountry.name}</p>

            <p><span>Native name:</span> {currentCountry.nativeName}</p>
            <p><span>Population:</span>{currentCountry.population.toLocaleString()}</p>
            <p><span>Region:</span>{currentCountry.region}</p>
            <p><span>Sub Region:</span>{currentCountry.subregion}</p>
            <p><span>Capital:</span>{currentCountry.capital}</p>


            <p><span>Top Level Domain:</span>{currentCountry.topLevelDomain[0]}</p>
            <p><span>Currencies:</span>{currencies}</p>
            <p><span>Languages:</span>{languages}</p>
            {currentCountry.borders && <p><span>Border Countries:</span></p>}
            <div className={styles.borders}>
               {currentCountry.borders?.map((border,index) => {
                return (<p className={`${styles.borderitem} ${mode && styles.borderstyles}`} key={index}>{border}</p>)
                
               })}
            </div>
            </div>
        </div>
    </div>)
}
export default CountryDetails