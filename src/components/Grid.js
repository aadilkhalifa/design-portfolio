import React from 'react'
import useWindowDimensions from './useWindowDimensions';

const imageHeight = Math.round(window.innerWidth * 1 / 3)-6;
const imageWidth = imageHeight;

function Grid() {
    const { height, width } = useWindowDimensions();
    var len = 30;
    var images = [];
    for (var i = 1; i <= len; i++) {
        images.push(
            // <img src={'/images/' + i + '.png'} style={imgStyle}></img>
            i
        );
    }
    return (
        // <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'stretch' }}>
        //     <div style={{ backgroundColor: 'blue' }}>div</div>
        //     <div style={{ backgroundColor: 'red' }}>div</div>
        //     <div style={{ backgroundColor: 'pink' }}>div</div>
        // </div>
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: 0, marginTop: 100}}>
            {images.map(function(i){
                return <img 
                    src={'/images/' + i + '.png'}  
                    style={{
                        height: width/3, 
                        width: (width-18)/3,
                    }}
                    ></img>
            })}
        </div>
        </>
    )
}

// const imgStyle = {
//     height: height, 
//     width: width, 
// }


export default Grid
