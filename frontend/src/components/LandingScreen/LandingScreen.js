import LandingPageButttons from "../LandingPageButtons/LandingPageButtons";
import IITGLogo from "../Images/Logos/IITGLogo.png";
import "./LandingScreen.css";
import Text from "./CheSTA_text";

function LandingScreen() {
  return (
    <div className="HeaderContainer">
      <img src={IITGLogo} className="IITGLogo Logo" alt="IITGLogo"></img>
      <Text></Text>
      <div className="Buttonsgroup">
        <LandingPageButttons title="BR's"></LandingPageButttons>
        <LandingPageButttons title="Coming Soon"></LandingPageButttons>
        <LandingPageButttons title="Gallery"></LandingPageButttons>
        <LandingPageButttons title="Contact"></LandingPageButttons>
      </div>
    </div>
  );
}

export default LandingScreen;
