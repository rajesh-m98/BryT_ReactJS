import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Embroid from "./Images/Embroid.avif"
import Necklace from "./Images/Necklace.avif"
import PlaqueImg from "./Images/Plaqueimg.webp"
import KnifeImg from "./Images/Knifeimg.webp"
import JewellBoximg from "./Images/JewellBoximg.webp"

const PopularGifts =()=>{
    return (
        <div id={style.populargifts}>
        <p>Popular gifts right now</p>
        <button>
            <img src={Embroid} alt=""/> <br/> <br/>
            <p>Personalized Embroidery Felt Bookmarks | Letter ...</p> <br/>
            <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <span id={style.light}>  (2,610) </span>
            </p>
            <p id={style.cost}>₹ 383 <strike>₹ 958</strike> <strong> (60% off) </strong></p>
        </button>
        <button>
            <img src={Necklace} alt=""/> <br/> <br/>
            <p>Custom Name Necklace, <br/> 18K Gold Plated Name ...</p> <br/>
            <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon> <span id={style.light}>  (2,610) </span>
            </p>
            <p id={style.cost}>₹ 383 <strike>₹ 958</strike> <strong> (60% off) </strong></p>
        </button>
        <button>
            <img src={PlaqueImg} alt="Thumbnail Image"/> <br/> <br/>
            <p>Personalised Song <br/> Plaque With Stand, Any ...</p> <br/>
            <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon class="fa-solid fa-star-half-stroke"></FontAwesomeIcon>
                <span id={style.light}>  (2,610) </span>
            </p>
            <p id={style.cost}>₹ 383 <strike>₹ 958</strike> <strong> (60% off) </strong></p>
        </button>
        <button>
            <img src={KnifeImg} alt="Thumbnail Image"/> <br/> <br/>
            <p>Handmade Damascus <br/> Pocket Knife Rose Wood ...</p> <br/>
            <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <span id={style.light}>  (2,610) </span>
            </p> 
            <p id={style.cost}>₹ 383 <strike>₹ 958</strike> <strong> (60% off) </strong></p>
        </button>
        <button>
            <img src={JewellBoximg} alt="Thumbnail Image"/> <br/> <br/>
            <p>Engraved Birth Flower jewellery Box, Travel ...</p> <br/>
            <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
                 <span id={style.light}>  (2,610) </span>
            </p>
            <p id={style.cost}>₹ 383 <strike>₹ 958</strike> <strong> (60% off) </strong></p>
        </button>
    </div>
    )
}

export default PopularGifts