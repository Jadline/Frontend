import { createContext,useContext,useEffect,useState} from "react"
const SpaceContext = createContext()
function SpaceProvider({children}){
    const [destinationdata,setDestinationdata] = useState([])
  const[crewdata,setCrewdata] = useState([])
  const[technology,setTechnologydata] = useState([])
  const[index,setIndex] = useState(0)
  const[technologyIndex,setTechnologyIndex] = useState(0)
//   console.log(destinationdata)
//   console.log(crewdata)
//   console.log(technology)
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


    return(
    <SpaceContext.Provider value={{
        crewdata : crewdata[index],
        setIndex,
        moondata :destinationdata[0],
        marsdata : destinationdata[1],
        europadata : destinationdata[2],
        titandata : destinationdata[3],
        technologydata : technology[technologyIndex],
        setTechnologyIndex,
        technologyIndex

    }}>
        {children}
    </SpaceContext.Provider>
    )

}
function useSpace(){
    const context = useContext(SpaceContext)
    if(context === undefined) throw new Error('You must have used the context outside the provider')
    return context
}
export {useSpace,SpaceProvider}