import LandingPageButttons from '../LandingPageButtons/LandingPageButtons';
import ChestaLogo from '../Images/Logos/ChestaLogo.png';
import IITGLogo from '../Images/Logos/IITGLogo.png';
import './LandingScreen.css'


function LandingScreen() {
  return (
    <div className="HeaderContainer">
      <div className='HeaderLogoContainer'>
        <img src={IITGLogo} className='HeaderLogos' alt='IITGLogo'></img>
        <img src={ChestaLogo} className='HeaderLogos chestaLogo' alt='ChestaLogo'></img>
      </div>
      <div className='HeaderTitle'>
        <div className=''>
          <p className='ChestaTitle_s' >Che</p>
          <p className='ChestaTitle'>mical </p>
        </div>
        <div>
          <p className='ChestaTitle_s'>S</p>
          <p className='ChestaTitle'>cience & </p>
          <p className='ChestaTitle_s'>T</p>
          <p className='ChestaTitle'>echnology </p>
        </div>
        <div>
          <p className='ChestaTitle_s'>A</p>
          <p className='ChestaTitle'>ssociation</p>
        </div>
      </div>

      <div className='Buttonsgroup'>
        <LandingPageButttons title="BR's"></LandingPageButttons>
        <LandingPageButttons title='Coming Soon'></LandingPageButttons>
        <LandingPageButttons title='Gallery'></LandingPageButttons>
        <LandingPageButttons title='Contact'></LandingPageButttons>
      </div>
    </div>
  );
}

export default LandingScreen;
