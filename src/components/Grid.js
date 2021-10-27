import React from 'react'
import "./grid.css"
import useWindowDimensions from './useWindowDimensions';
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
import image5 from '../images/5.png'
import image6 from '../images/6.png'
import image7 from '../images/7.png'
import image8 from '../images/8.png'
import image9 from '../images/9.png'
import image10 from '../images/10.png'
import image11 from '../images/11.png'
import image12 from '../images/12.png'
import image13 from '../images/13.png'
import image14 from '../images/14.png'
import image15 from '../images/15.png'
import image16 from '../images/16.png'
import image17 from '../images/17.png'
import image18 from '../images/18.png'
import image19 from '../images/19.png'
import image20 from '../images/20.png'
import image21 from '../images/21.png'
import image22 from '../images/22.png'
import image23 from '../images/23.png'
import image24 from '../images/24.png'
import image25 from '../images/25.png'
import image26 from '../images/26.png'
import image27 from '../images/27.png'
import image28 from '../images/28.png'
import image29 from '../images/29.png'
import image30 from '../images/30.png'

function Grid() {
    const { height, width } = useWindowDimensions();
    var len = 30;
    var images = [];
    for (var i = 1; i <= len; i++) {
        images.push(
            i
        );
    }
    return (
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: 0, marginTop: 100}}>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image1} alt="" className="ImgItem" />
                <h3 className="ImgTitle">ADIDAS</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image2} alt="" className="ImgItem" />
                <h3 className="ImgTitle">ZARA</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image3} alt="" className="ImgItem" />
                <h3 className="ImgTitle">DUBAI</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image4} alt="" className="ImgItem" />
                <h3 className="ImgTitle">BARCELONA</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image5} alt="" className="ImgItem" />
                <h3 className="ImgTitle">HAPPY</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image6} alt="" className="ImgItem" />
                <h3 className="ImgTitle">GOA</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image7} alt="" className="ImgItem" />
                <h3 className="ImgTitle">NYC</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image8} alt="" className="ImgItem" />
                <h3 className="ImgTitle">GOOGLE</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image9} alt="" className="ImgItem" />
                <h3 className="ImgTitle">APPLE</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image10} alt="" className="ImgItem" />
                <h3 className="ImgTitle">HONG KONG</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image11} alt="" className="ImgItem" />
                <h3 className="ImgTitle">KITKAT</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image12} alt="" className="ImgItem" />
                <h3 className="ImgTitle">LONDON</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image13} alt="" className="ImgItem" />
                <h3 className="ImgTitle">LOS ANGELES</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image14} alt="" className="ImgItem" />
                <h3 className="ImgTitle">ROME</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image15} alt="" className="ImgItem" />
                <h3 className="ImgTitle">MANGO</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image16} alt="" className="ImgItem" />
                <h3 className="ImgTitle">MIAMI</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image17} alt="" className="ImgItem" />
                <h3 className="ImgTitle">MUMBAI</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image18} alt="" className="ImgItem" />
                <h3 className="ImgTitle">MUMBAI</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image19} alt="" className="ImgItem" />
                <h3 className="ImgTitle">NIKE</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image20} alt="" className="ImgItem" />
                <h3 className="ImgTitle">NIKE</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image21} alt="" className="ImgItem" />
                <h3 className="ImgTitle">GOOGLE</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image22} alt="" className="ImgItem" />
                <h3 className="ImgTitle">PARIS</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image23} alt="" className="ImgItem" />
                <h3 className="ImgTitle">SINGAPORE</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image24} alt="" className="ImgItem" />
                <h3 className="ImgTitle">PORTO</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image25} alt="" className="ImgItem" />
                <h3 className="ImgTitle">QATAR</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image26} alt="" className="ImgItem" />
                <h3 className="ImgTitle">WHY SO SERIOUS</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image27} alt="" className="ImgItem" />
                <h3 className="ImgTitle">SAD</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image28} alt="" className="ImgItem" />
                <h3 className="ImgTitle">SHIT HAPPENS</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image29} alt="" className="ImgItem" />
                <h3 className="ImgTitle">AMAZON</h3>
            </div>
            <div className="item" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}>
                <img src={image30} alt="" className="ImgItem" />
                <h3 className="ImgTitle">UPS</h3>
            </div>
            


            {/* <img src={image1} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image2} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image3} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image4} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image5} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image6} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image7} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image8} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image9} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image10} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image11} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image12} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image13} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image14} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image15} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image16} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image17} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image18} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image19} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image20} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image21} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image22} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image23} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image24} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image25} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image26} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image27} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image28} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image29} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/>
            <img src={image30} alt="" style={{
                        height: width/3, 
                        width: (width)/3,
                    }}/> */}



            {/* {images.map(function(i){
                return <img key={i} 
                    src={'../images/' + i + '.png'}  
                    style={{
                        height: width/3, 
                        width: (width-18)/3,
                    }}
                    ></img>
            })} */}
        </div>
        </>
    )
}

// const imgStyle = {
//     height: height, 
//     width: width, 
// }


export default Grid
