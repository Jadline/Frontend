import SwitchMode from "./Components/switchMode"
import Search from './Components/Search'
import CountryContainer from "./Components/CountryContainer"
import { useEffect,useState,createContext} from "react"
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import CountryDetails from "./Components/CountryDetails"
import Homepage from "./Components/Homepage"

export const CountryContext = createContext()
function App() {
  const[countries,setCountries] = useState([])
  const[query,setQuery] = useState('');
  const[region,setRegion] = useState(null)
  const[mode,setMode] = useState(false)

  // console.log(countries)
  useEffect(() => {
    async function fetchCountriesData(){
      const res = await fetch('./data.json');
      const data = await res.json()
      setCountries(data)
    }
    fetchCountriesData()
  },[])
  
 

  return(
    <BrowserRouter>
    <CountryContext.Provider value={{
      query,
      setQuery,
      countries,
      region,
      setRegion,
      mode,
      setMode
    }}>
      
      <div className={mode ? 'darkmode': 'app' }>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/CountryDetails/:countryname' element={<CountryDetails/>}/>
        </Routes>
        
      </div>
     
     
    </CountryContext.Provider>
    </BrowserRouter>

  )
 }

export default App
