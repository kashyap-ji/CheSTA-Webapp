import ChestaLogo from '../Images/Logos/ChestaLogo.png';
import "./LandingScreen.css"

function Text(){
    return(
        <div className='Text-box'>
              <div className="blur"></div>
      <div className='HeaderMiddleBlock'>
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
        <img src={ChestaLogo} className='chestaLogo' alt='ChestaLogo'></img>
      </div>
        </div>
    )
}
export default Text;