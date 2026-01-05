export default function Info() {
    return (
       <div>
            <div className="image-container">
                <img className="img-details" src="/src/assets/headshot-1.png" alt="Headshot"/>
            </div>
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