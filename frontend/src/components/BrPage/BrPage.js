import Curtain from "../curtain/curtain";
import Footer from "../footer/footer";
import './BrPage.css';
import Batch from "./Batch/Batch";

const dummyData = [[{ year: 2021, image: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png', name: 'Pratham G', phone: '9023100020', email: 'prathamG@gmail.com' },
{ year: 2021, image: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png', name: 'Pratham G', phone: '9023100020', email: 'prathamG@gmail.com' }], [{ year: 2022, image: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png', name: 'Pratham G', phone: '9023100020', email: 'prathamG@gmail.com' },
{ year: 2022, image: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png', name: 'Pratham G', phone: '9023100020', email: 'prathamG@gmail.com' }], [{ year: 2023, image: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png', name: 'Pratham G', phone: '9023100020', email: 'prathamG@gmail.com' },
{ year: 2023, image: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png', name: 'Pratham G', phone: '9023100020', email: 'prathamG@gmail.com' }], [{ year: 2024, image: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png', name: 'Pratham G', phone: '9023100020', email: 'prathamG@gmail.com' },
{ year: 2024, image: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png', name: 'Pratham G', phone: '9023100020', email: 'prathamG@gmail.com' }]];
const BrPage = (props) => {
    return (<div className="BRsPage">
        {/* <div className="sticky"> */}
        <Curtain />
        {/* </div> */}
        <ul className="allBrInfo">
            {dummyData.map((brInfoByYear) => (
                <div className="brInfoByYear">
                    <div className="batchDisplay">
                        <div className="bulletBatch"></div>
                        <p className="batchYear">BATCH OF {brInfoByYear[0].year}</p>
                    </div>
                    <Batch info={brInfoByYear} />
                </div>
            ))}
        </ul>
        <Footer />
        <div className="grad"></div>
    </div>)
}


export default BrPage;
