import './Heading.scss'
import React from "react"
// import motion from "framer-motion"
import 'aos/dist/aos.css'; 
// import Aos from "aos";
import { Parallax } from 'react-scroll-parallax';
// import { render } from "react-dom";
// import { Parallax as Parallax2, Background } from "react-parallax";
// import H1 from '../../images/vectors/H1.svg'
// import H2 from '../../images/vectors/H2.svg'
import O from '../../images/vectors/O.svg'
// import E2 from '../../images/vectors/E2.svg'
// import bg1 from '../../images/backgrounds/background1.png'

function Heading() {

    // useEffect(() => {
    //     Aos.init({
    //         duration: 2000,
    //     });
    // }, [])



    return (
        <>
            

            {/* <div className="testDiv">

                <div className="textDivInside">
                    
                    <Parallax  y={[100, -100]} >
                        <p className="title2">H</p>
                    </Parallax>
                    <Parallax  y={[200, -200]} >
                        <p className="title2">E</p>
                    </Parallax>
                    <Parallax  y={[300, -300]} >
                        <p className="title2">L</p>
                    </Parallax>
                    <Parallax  y={[400, -400]} >
                        <p className="title2">L</p>
                    </Parallax>
                    <Parallax  y={[500, -500]} >
                        <p className="title2">O</p>
                    </Parallax>
                    
                </div>
                
            </div> */}
 

                <div className="testDiv">

                    <div className="textDivInside">
                        <div className="letterDiv">
                            <Parallax  y={[100, -100]} >
                                <div className="letterLong"></div>
                            </Parallax>
                                <div className="letterWide"></div>
                            <Parallax  y={[300, -300]} > 
                                <div className="letterLong"></div>
                            </Parallax>
                            
                            
                            
                        </div>
                        <div className="letterDiv">
                            <Parallax  y={[-100, 100]} >
                                <div className="letterLong"></div>
                            </Parallax>
                            

                            
                            <div style={{ height: 80, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <Parallax  y={[0, 0]} >
                                
                                    <div className="letterWide"></div> 
                                </Parallax>
                                <Parallax  y={[200, -200]} >
                                
                                    <div className="letterWide"></div> 
                                </Parallax>
                                <Parallax  y={[0, 0]} >
                                    <div className="letterWide"></div> 
                                </Parallax>
                            </div>
                        </div>
                        <div className="letterDiv">
                            <Parallax  y={[-50, 50]} >
                                <div className="letterLong"></div>
                            </Parallax>
                            <Parallax  y={[200, -200]} >
                                <div style={{height: 80, display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                    <div className="letterWide"></div>
                                </div>
                            </Parallax>
                        </div>
                        
                        <div className="letterDiv">
                            <Parallax  y={[100, -100]} >
                                <div className="letterLong"></div>
                            </Parallax>
                            <Parallax  y={[-100, 100]} >
                                <div style={{height: 80, display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                    
                                    <div className="letterWide"></div>
                                    
                                </div>
                            </Parallax>
                        </div>
                        
                        <div className="letterDiv">
                            <Parallax  y={[100, -100]} >
                                <img src={O} style={{height: 80}} alt="React Logo" />
                            </Parallax>
                        </div>



                    </div>
                    </div>



                    {/* <Parallax2 bgImage={bg1} strength={100}> */}
                        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
                            <div className="TitleDiv" 
                                id="home" 
                                // data-aos="fade" 
                                // style={insideStyles}
                                >
                        

                                <h2 className='title1' >I'm</h2>
                                <h1 className='title2' >Aadil</h1>
                                <h1 className='title2' >Khalifa.</h1>
                                <h3 className='title3' >This is my design portfolio</h3>
                                
                            </div>
                        </div>
                    {/* </Parallax2> */}

                
        </>
    )
}
// const insideStyles = {
//     // background: "white",
//     padding: 20,
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "start",
//     alignItems: "start",
//     width: "100%",
//     paddingLeft: "120px",
//   };

export default Heading
