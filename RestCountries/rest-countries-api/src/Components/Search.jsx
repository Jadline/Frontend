import styles from './Search.module.css'
import { useContext } from 'react'
import { CountryContext } from '../App'
function Search(){
    const{query,setQuery,region,setRegion,mode} = useContext(CountryContext)
    return(
        <div className={`${styles.searchcontainer} ${mode && styles.darkmode}`}>
            <div>
            <input type='text' placeholder='Search for a country...' className={`${styles.searchinput} ${mode && styles.darkmode}`} value={query} onChange={(e) =>setQuery(e.target.value)}/>
            </div>
            <select className={`${styles.select} ${mode && styles.darkmode}`} value={region} onChange={(e) => setRegion(e.target.value)}>
               <option value='' disabled selected>filter by option</option>
                <option value='africa'>Africa</option>
                <option  value='americas'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </select>
        </div>
    )
}
export default Search