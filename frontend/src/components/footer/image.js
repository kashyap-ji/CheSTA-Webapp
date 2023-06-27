import logo from "../logo/chesta_logo.png";

function Logo(){
    return(
        <div>
            <img className="logo" src={logo} alt="Logo" />;
            <div className="logo_base"></div>
         </div>
    )
}
export default Logo;