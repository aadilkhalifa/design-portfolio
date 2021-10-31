import './Modal.scss';
import {useSpring, animated} from 'react-spring'
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

import React, {useRef, useEffect, useCallback} from 'react'

function Modal({showModal, setModal, index}) {

    const modalRef = useRef(); 

    const animation = useSpring({
        config: {
            duration: 250
        },
        opactiy: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(100%)`
    })

    const closeModal = e=>{
        if(modalRef.current === e.target ){
            setModal(false);
        }
    }

    useEffect(() => {
        showModal && (document.body.style.overflow = 'hidden');
        !showModal && (document.body.style.overflow = 'unset');
     }, [showModal ]);

    var images = [];
    
    images.push(image1);
    images.push(image2);
    images.push(image3);
    images.push(image4);
    images.push(image5);
    images.push(image6);
    images.push(image7);
    images.push(image8);
    images.push(image9);
    images.push(image10);
    images.push(image11);
    images.push(image12);
    images.push(image13);
    images.push(image14);
    images.push(image15);
    images.push(image16);
    images.push(image17);
    images.push(image18);
    images.push(image19);
    images.push(image20);
    images.push(image21);
    images.push(image22);
    images.push(image23);
    images.push(image24);
    images.push(image25);
    images.push(image26);
    images.push(image27);
    images.push(image28);
    images.push(image29);
    images.push(image30);

    return (
        <>
            {showModal ? (
            <div className="ModalBackground" ref={modalRef} onClick={closeModal}>
                {/* <animated className="div" style={animation}> */}
                    <div className="ModalWrapper" >
                        <img src={images[index]} className="ModalImg" alt="" />
                    </div>
                {/* </animated> */}
            </div>) : null}
        </>
    )
}

export default Modal
