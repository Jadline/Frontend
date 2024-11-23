import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Crew from "./Pages/Crew"
import Destination from "./Pages/Destination"
import Technology from "./Pages/Technology"
import Moon from "./Components/Moon"
import Mars from "./Components/Mars"
import Titan from "./Components/Titan"
import Europa from "./Components/Europa"
import { useEffect,useState } from "react"


function App() {
  const [destinationdata,setDestinationdata] = useState([])
  const[crewdata,setCrewdata] = useState([])
  const[technology,setTechnologydata] = useState([])
  const[index,setIndex] = useState(0)
  const[technologyIndex,setTechnologyIndex] = useState(0)
  console.log(destinationdata)
  console.log(crewdata)
  console.log(technology)
  useEffect(() => {
    async function fetchData(){
      const res = await fetch('/data.json')
      const data = await res.json()
      setDestinationdata(data.destinations)
      setCrewdata(data.crew)
      setTechnologydata(data.technology)

    }
    fetchData()

  },[])
  useEffect(() => {
    const intervalid = setInterval(() => {
      setIndex(index => index < crewdata.length - 1 ? index + 1 : 0)
    }, 3000);
    return () => clearInterval(intervalid)
  },[crewdata.length])

  

  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/crew' element={<Crew crewdata={crewdata[index]} setIndex ={setIndex}/>}/>
        <Route path='/destination' element={<Destination/>}>
          <Route  index element={<Moon moondata={destinationdata[0]}/>}/>
          <Route path='moon' element={<Moon moondata={destinationdata[0]}/>}/>
          <Route path='mars' element={<Mars marsdata ={destinationdata[1]}/>}/>
          <Route path='europa' element={<Europa europadata ={destinationdata[2]}/>}/>
          <Route path='titan' element={<Titan titandata = {destinationdata[3]}/>}/>
        </Route>
        <Route path='/technology' element={<Technology technologydata ={technology[technologyIndex]} setTechnologyIndex={setTechnologyIndex}/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
