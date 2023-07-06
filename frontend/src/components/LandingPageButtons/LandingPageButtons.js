import "./LandingPageButtons.css";
function LandingPageButttons(props) {
    const { title, active } = props;
    return (
        <button className={`LandingPage-Buttons ${active ? "active" : ""}`} title="Students">{title}</button>
    )
}

export default LandingPageButttons;