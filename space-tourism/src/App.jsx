import { BrowserRouter,Routes,Route } from "react-router-dom"
import { SpaceProvider} from "./Context/tourismContext"
import PageLoader from './Pages/PageLoader'


import { lazy } from "react"
import { Suspense } from "react"




import Moon from "./Components/Moon"
import Mars from "./Components/Mars"
import Titan from "./Components/Titan"
import Europa from "./Components/Europa"


const HomePage = lazy(() => import("./Pages/HomePage"));
const Crew = lazy(() => import("./Pages/Crew"));
const Destination = lazy(() => import("./Pages/Destination"));
const Technology = lazy(() => import("./Pages/Technology"))





function App() {

  return (
    <SpaceProvider>
    <div className='app'>
      <BrowserRouter>
      <Suspense fallback={<PageLoader/>}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/destination' element={<Destination/>}>
          <Route  index element={<Moon />}/>
          <Route path='moon' element={<Moon/>}/>
          <Route path='mars' element={<Mars/>}/>
          <Route path='europa' element={<Europa/>}/>
          <Route path='titan' element={<Titan/>}/>
        </Route>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
      </Suspense>
      </BrowserRouter>

    </div>
    </SpaceProvider>
  )
}

export default App
