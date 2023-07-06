import "./student_profile.css";
const data = 
    {
        RollNo: "+91 0000000",
        Name: 'Pratham Garg',
        linkedine: 'https://www.linkedin.com/in/ajaikumar-kunnumakkara-b5b53b19/',
        email: 'chesta1@iitg.ac.in'
      }
    //   {
    //     RollNo: 210122002,
    //     Name: 'chesta2',
    //     linkedine: 'https://www.linkedin.com/in/kmazumdarshaw/',
    //     email: 'chesta2@iitg.ac.in'
    //   },
    //   {
    //     RollNo: 210122003,
    //     Name: 'chesta3',
    //     linkedine: 'https://www.linkedin.com/in/ravi-venkatesan-ba15b820/',
    //     email: 'chesta3@iitg.ac.in'
    //   }

function Student_profile(){

    return(
        <div className="profile">
                <div className="img" >
                    <img className="profile_picture" src="https://media.licdn.com/dms/image/D4D03AQECDMA8KGFgFw/profile-displayphoto-shrink_800_800/0/1679643796535?e=1693440000&v=beta&t=EpZOvRM1LNiKozYvifV0JKhFSx5HG4IaKm0xD3AMVaU" alt={data.linkedine+"overlay/photo/"} />
                </div>
                <div className="details">
                    <h1 className="name">{data.Name}</h1>
                    <div className="contact">
                        <h2>Contact</h2>
                        <h3 className="phone_number">{data.RollNo}</h3>
                        <h3 className="email">{data.email}</h3>
                    </div>
                </div>
        </div>
    )
}
export default Student_profile;