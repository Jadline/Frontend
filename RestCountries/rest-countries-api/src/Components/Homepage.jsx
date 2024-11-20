import CountryContainer from "./CountryContainer";
import Search from "./Search";
import SwitchMode from "./switchMode";


function Homepage(){
    return(
        <div>
            <SwitchMode/>
            <Search/>
            <CountryContainer/>
        </div>
    )
}
export default Homepage