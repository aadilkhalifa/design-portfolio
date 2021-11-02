import { FaGithub } from "react-icons/fa"
import { FaBehanceSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import 'aos/dist/aos.css'; 
import Aos from "aos";
import { useEffect } from "react";

function Contact() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, [])

    return (
        <div id="contact">
            <div className="SectionDiv" >
                <h1 className="subheading"  >
                    CONTACT ME
                </h1>
                <div className="ContactInnerDiv"  >
                <a href="https://www.instagram.com/dildesigns/" style={{ color: "white" }} target="_blank">
                <FaInstagramSquare size={30} />
                </a>
                <a href="https://www.behance.net/aadilkhalifa" style={{ color: "white" }} target="_blank">
                <FaBehanceSquare size={30} />
                </a>
                <a href="https://www.linkedin.com/in/aadil-khalifa-7361031b6" style={{ color: "white" }} target="_blank">
                <FaLinkedin size={30} />
                </a>

                </div>
            </div>
        </div>
    )
}

export default Contact
