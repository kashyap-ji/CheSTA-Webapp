import "./LandingPageButtons.css";
function LandingPageButttons(props) {
    const { title, active } = props;
    return (
        <button className={`LandingPage-Buttons ${active ? "active" : ""}`} title={title}>{title}</button>
    )
}

export default LandingPageButttons;