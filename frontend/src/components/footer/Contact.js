let Data=[
    {
        "name":"BRs",
        "link":"./BRs"
    },
    {
        "name":"HOD",
        "link":"https://www.iitg.ac.in/chem/page_details.php?page=62bf9d39f9bc5c8a57ce9348dc41679040a47c6f&name=Head"
    },
    {
        "name":"DUPC",
        "link":"https://www.iitg.ac.in/chem/page_details.php?page=8e4fd35d1b86f4a62f3c0188aa84fb2c407d0a04&name=DUPC"
    },
    {
        "name":"Other Committee",
        "link":"https://www.iitg.ac.in/chem/page_details.php?page=3f6fe4b87d81ee16e925c55898cda91e7bba4289&name=Other-Committee"
    },
    {
        "name":"Chemistry Office",
        "link":"https://www.iitg.ac.in/chem/"
    },
    {
        "name":"Websitee-Feedback",
        "link":"./Feedback"
    }
];

function Contact(){

    return(
        <div>
            <div className="header">Contacts</div>
            <div className="links">
            {Data.map((each)=>(
                <a className="each_link" target="_blank" href={each.link}>{each.name}</a>
            ))}
            </div>
        </div>
    )
}

export default Contact;