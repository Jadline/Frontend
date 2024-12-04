import FiltersNav from './Components/FiltersNav'
import JobListings from './Components/JobListings'
import { useEffect,useState } from 'react'
const tempcategories = [
  {name : 'Frontend',id : 1},
  {name : 'css',id: 2},
  {name : 'Javascript',id : 3
  }
]
function App() {
  const [jobsdata,setJobsdata] = useState([])
  const[categories,setCategories] = useState(tempcategories)
  useEffect(() => {
    async function fetchJobsData(){
      const res = await fetch('/data.json')
      const data = await res.json()
      setJobsdata(data)
    }
    fetchJobsData()
  },[])
  
  return (
   <div className='app'>
    <FiltersNav jobsdata={jobsdata} categories={categories} setCategories={setCategories}/>
    <JobListings jobsdata={jobsdata}/>
   </div>
  )
}

export default App
