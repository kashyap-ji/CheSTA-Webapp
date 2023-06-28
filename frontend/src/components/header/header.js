import LandingPageButttons from '../LandingPageButtons/LandingPageButtons';
import './header.css'
import ChestaLogo from '../Images/ChestaLogo.png';
import IITGLogo from '../Images/IITGLogo.png';


function Header() {
  return (
    <div className="App">
      <div className='HeaderTitle'>
        <div>
          <img src={IITGLogo} className='HeaderLogos' alt='IITGLogo'></img>
          <img src={ChestaLogo} className='HeaderLogos' alt='ChestaLogo'></img>
        </div>
        <div>
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
        <LandingPageButttons title='Students'></LandingPageButttons>
        <LandingPageButttons title='Coming Soon'></LandingPageButttons>
        <LandingPageButttons title='Gallery'></LandingPageButttons>
        <LandingPageButttons title='Contact'></LandingPageButttons>
      </div>
    </div>
  );
}

export default Header;
