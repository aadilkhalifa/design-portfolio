
import React from "react"
// import motion from "framer-motion"
import 'aos/dist/aos.css'; 
import Aos from "aos";
import { useEffect } from "react";
import { Parallax } from 'react-scroll-parallax';
import H1 from '../images/vectors/H1.svg'
import H2 from '../images/vectors/H2.svg'
import O from '../images/vectors/O.svg'
import E2 from '../images/vectors/E2.svg'

function Heading() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, [])

    return (
        <>
            

            <div className="testDiv">

                <div className="textDivInside">
                    
                    {/* <Parallax  x={[-2000, 1000]} >
                        <div style={{ backgroundColor: "white", height: 5, width: 100, borderRadius: 10 }}></div>
                    </Parallax> */}
                    <Parallax  y={[100, -100]} >
                        {/* <div style={{ backgroundColor: "white", height: 100, width: 100, borderRadius: 10 }}></div> */}
                        <p className="title2">H</p>
                    </Parallax>
                    <Parallax  y={[200, -200]} >
                        {/* <div style={{ backgroundColor: "white", height: 100, width: 100, borderRadius: 10 }}></div> */}
                        <p className="title2">E</p>
                    </Parallax>
                    <Parallax  y={[300, -300]} >
                        {/* <div style={{ backgroundColor: "white", height: 100, width: 100, borderRadius: 10 }}></div> */}
                        <p className="title2">L</p>
                    </Parallax>
                    <Parallax  y={[400, -400]} >
                        {/* <div style={{ backgroundColor: "white", height: 100, width: 100, borderRadius: 10 }}></div> */}
                        <p className="title2">L</p>
                    </Parallax>
                    <Parallax  y={[500, -500]} >
                        {/* <div style={{ backgroundColor: "white", height: 100, width: 100, borderRadius: 10 }}></div> */}
                        <p className="title2">O</p>
                    </Parallax>
                    
                    </div>
                
                </div>

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


            <div className="TitleDiv" id="home" data-aos="fade">
                

                <h2 className='title1' >I'm</h2>
                <h1 className='title2' >Aadil</h1>
                <h1 className='title2' >Khalifa.</h1>
                <h3 className='title3' >This is my design portfolio</h3>
                
            </div>
        </>
    )
}

export default Heading
