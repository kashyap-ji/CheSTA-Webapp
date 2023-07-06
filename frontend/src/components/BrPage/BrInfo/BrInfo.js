import './BrInfo.css';



const BrInfo = (props) => {
    return (<div className='BRContainer'>
        <div className='imageContainer'>
            <img src={props.brDetails.image} alt='Student_photo' className='brImage' />
        </div>
        <div className='infoContainer'>
            <div className='nameSection'>
                <p className='name'>{props.brDetails.name}</p>
            </div>
            <div className='contactSection'>
                <p className='contactDetails'>Contact</p>
                <p className='contactDetails'>{props.brDetails.phone}</p>
                <p className='contactDetails'>{props.brDetails.email}</p>
            </div>
        </div>
    </div>)
}
export default BrInfo;