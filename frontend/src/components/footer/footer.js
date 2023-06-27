import MessageUs from "./message";
import QuickLinks from "./QuickLinks";
import Contact from "./Contact";
import Logo from "./image";

function Footer(){

    return(
        <div className="footer">
        <Logo/>
        <QuickLinks/>
        <Contact/>
        <MessageUs/>
        </div>
    )
}
export default Footer;