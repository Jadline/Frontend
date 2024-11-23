import { createContext,useContext } from "react"
const spaceContext = createContext()
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


    return(
    <spaceContext.Provider value={{
        crewdata : crewdata[index],
        setIndex,
        moondata :destinationdata[0],
        marsdata : destinationdata[1],
        europadata : destinationdata[2],
        titandata : destinationdata[3],
        technologydata : technology[technologyIndex],
        setTechnologyIndex

    }}>
        {children}
    </spaceContext.Provider>
    )

}
function useSpace(){
    const context = useContext(spaceContext)
    if(context === undefined) throw new Error('You must have used the context outside the provider')
    return context
}
export {useSpace,spaceContext}