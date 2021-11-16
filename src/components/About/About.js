import "./About.scss" 
import 'aos/dist/aos.css'; 
import Aos from "aos";
import { useEffect } from "react";

function About() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []) 

    return (
        <div className="SectionDiv" id="about">
            <div data-aos="fade"  >
                <h1 className="subheading">
                    ABOUT
                </h1>
                <p className="desc">
                    Hey guys!
                    I'm an engineering student passionate about design.
                    I'm fascinated by lettering and type design.
                    I'm also interested in branding, animation, UI/UX design, 3d modeling.
                    My preferred design software is Adobe Illustrator.
                </p>
            </div>
        </div>
    )
}

export default About
