import LandingPageButttons from '../LandingPageButtons/LandingPageButtons';
import './header.css'
import ChestaLogo from '../Images/Logos/ChestaLogo.png';
import IITGLogo from '../Images/Logos/IITGLogo.png';


function Header() {
  return (
    <div className="HeaderContainer">
      <div className='HeaderLogoContainer'>
        <img src={IITGLogo} className='HeaderLogos' alt='IITGLogo'></img>
        <img src={ChestaLogo} className='HeaderLogos' alt='ChestaLogo'></img>
      </div>
      <div className='HeaderTitle'>
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
      <div className='AboutSection'>
        <p className='AboutTitle'>WHO ARE WE?</p>
        <p className='AboutContent'>CheSTA (Chemical Science & Technology Association) is an organization of students of B.Tech. Chemical Science and Technology (CST); established to look after various departmental activities of chemistry department and providing a forum of interaction among all the people of the department.
          Founded in 1995, the Department of Chemistry has emerged as a globally recognized leading department in basic science and technology, engaged in research covering all major areas of Chemistry viz. Organic, Inorganic, Physical and Theoretical Chemistry. The program of Bachelor of Technology (B.Tech) in Chemical Science and Technology (CST) has been opened and is being pursued with the intention of nurturing exceptional undergraduate students trained with the knowledge in general areas of engineering and chemistry. The unique knowledge of basic science coupled with technological knowledge and technical expertise in B.Tech CST students is especially conductive for industries.</p>

      </div>
    </div>
  );
}

export default Header;
