import './Batch.css';
import BrInfo from '../BrInfo/BrInfo';

const Batch = (props) => {
    return (<ul className='batchContainer'>
        {props.info.map((BatchInfo) => (
            <BrInfo brDetails={BatchInfo} />
        ))}
    </ul>)
};


export default Batch;