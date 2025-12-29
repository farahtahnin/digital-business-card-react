export default function Info() {
    return (
       <div>
            <img className="img-details" src="/src/assets/headshot.png" alt="Headshot"/>
            <p className="name">Laura Smith</p>
            <p className="role">Front End Developer</p>
            <a href="" className="website">laurensmith.website</a>
            <div className="contact-buttons">
                <button className="email-button">
                    <img className="email-icon" src="/src/assets/emailicon.png" alt="mail-icon"/>
                    Email
                </button>
                <button className="linkedin-button">
                    <img className="linkedin-icon" src="/src/assets/linkedin.png" alt="linkedin-icon"/>
                    LinkedIn
                </button>
            </div>
       </div>
    )
}