import LandingScreen from "../components/LandingScreen/LandingScreen";
import About from "../components/About/About";
import Footer from "../components/footer/footer";

import "./pages.css";
function LandingPage(){
    return(
        <div>
        <div className="LandingPage">
            <LandingScreen></LandingScreen>
            <About></About>
            <Footer></Footer>
        </div>

         <div className="grad"></div>
         </div>
    )
}
export default LandingPage;