import React, {useState} from 'react'
import 'aos/dist/aos.css'; 
import Aos from "aos";
import { useEffect } from "react";
import "./grid.scss"
import Modal from './Modal'
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'
import image4 from '../../images/4.png'
import image5 from '../../images/5.png'
import image6 from '../../images/6.png'
import image7 from '../../images/7.png'
import image8 from '../../images/8.png'
import image9 from '../../images/9.png'
import image10 from '../../images/10.png'
import image11 from '../../images/11.png'
import image12 from '../../images/12.png'
import image13 from '../../images/13.png'
import image14 from '../../images/14.png'
import image15 from '../../images/15.png'
import image16 from '../../images/16.png'
import image17 from '../../images/17.png'
import image18 from '../../images/18.png'
import image19 from '../../images/19.png'
import image20 from '../../images/20.png'
import image21 from '../../images/21.png'
import image22 from '../../images/22.png'
import image23 from '../../images/23.png'
import image24 from '../../images/24.png'
import image25 from '../../images/25.png'
import image26 from '../../images/26.png'
import image27 from '../../images/27.png'
import image28 from '../../images/28.png'
import image29 from '../../images/29.png'
import image30 from '../../images/30.png'

function Grid() {


    const [showModal, setModal] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        Aos.init({
            duration: 300,
        });
    }, []) 
    
    var len = 30;
    var images = [];
    var labels = [];
    
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
    labels.push("CONFUSE");
    labels.push("ZARA");
    labels.push("DUBAI")
    labels.push("HAPPY");
    labels.push("HOPE");
    labels.push("GOA");
    labels.push("NYC");
    labels.push("GOOGLE");
    labels.push("APPLE");
    labels.push("HONG KONG");
    labels.push("KITKAT");
    labels.push("NIKE");
    labels.push("LOS ANGELES");
    labels.push("ROME");
    labels.push("BARCELONA");
    labels.push("MIAMI");
    labels.push("MUMBAI");
    labels.push("MUMBAI");
    labels.push("ADIDAS");
    labels.push("NIKE");
    labels.push("GOOGLE");
    labels.push("PARIS");
    labels.push("SINGAPORE");
    labels.push("PORTO");
    labels.push("QATAR");
    labels.push("WHY SO SERIOUS?");
    labels.push("AMAZON");
    labels.push("SHIT HAPPENS");
    labels.push("SAD");
    labels.push("LONDON");

    
    function toggleModal(i){
        setModal(!showModal);
        setIndex(i);
    } 

    var items = [];

    var tallItems = [0, 5, 9, 14, 18, 23];
    for (let i = 0; i < len; i++) {

        items.push(
            <div className={`one ${tallItems.includes(i) ? "one-tall" : ""}`} onClick={()=>{toggleModal(i)}}>
                <img src={images[i]} className="newImg ImgItem" />
                <h3 className="ImgTitle">{labels[i]}</h3>
            </div>
        );
    }

    return (
        <>
            <div className="grid2">

                {items}

            </div>
            <Modal showModal={showModal} setModal={setModal} index={index} />
        </>
    )
}


export default Grid
