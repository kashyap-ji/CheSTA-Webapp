let Data=[
    {"name":"Academic ERP",
     "link":"https://academic.iitg.ac.in/sso/"
    },
    {"name":"Student ERP",
     "link":"https://online.iitg.ac.in/sso/"
    },
    {"name":"Department of Chemistry",
     "link":"https://www.iitg.ac.in/chem/"
    },
    {"name":"Other",
     "link":""
    }
];

function QuickLinks(){

    return(
        <div>
        <div className="header">Quick Links</div>
            <div className="links">
            {Data.map((each)=>(
                <a className="each_link" target="_blank" href={each.link}>{each.name}</a>
            ))}
            </div>
        </div>
    )
}

export default QuickLinks;