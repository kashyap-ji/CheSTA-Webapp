import logo from "../Images/Logos/ChestaLogo.png";

function Logo(){
    return(
        <div>
            <img className="logo" src={logo} alt="Logo" />;
            <div className="logo_base"></div>
            <div className="grad logo_grad"></div>
         </div>
    )
}
export default Logo;