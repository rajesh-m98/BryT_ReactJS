import React from "react";
import style from "./populargifts.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Embroid from "./Images/Embroid.avif"
import Necklace from "./Images/Necklace.avif"
import PlaqueImg from "./Images/Plaqueimg.webp"
import KnifeImg from "./Images/Knifeimg.webp"

const PopularGifts =()=>{
    return (
        <div id={style.populargifts} className="container-fluid">
            <div className="row mt-2 p-5">
                <p className="text-center col-md-12 h3" id={style.pop}>Popular gifts right now</p>
                <button className="btn col-md-3">
                    <img src={Embroid} alt="" width={140}/>
                    <p className="h5">Personalized Embroidery Felt Bookmarks | Letter ...</p>
                    <p>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <span id={style.light}>(2,610)</span>
                    </p>
                    <p className="font-weight-bold">₹ 383 <strike>₹ 630</strike> <strong>(45% off)</strong></p>
                </button>
                <button className="btn col-md-3">
                    <img src={Necklace} alt="" width={140}/>
                    <p className="h5">Custom Name Necklace, 18K Gold Plated Name ...</p>
                    <p>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className="fas fa-solid fa-star-half-stroke"></FontAwesomeIcon> <span id={style.light}>(2,610)</span>
                    </p>
                    <p className="font-weight-bold">₹ 380 <strike>₹ 760</strike> <strong>(50% off)</strong></p>
                </button>
                <button className="btn col-md-3">
                    <img src={PlaqueImg} alt="" width={140}/>
                    <p className="h5">Personalised Song Plaque With Stand, Any ...</p>
                    <p>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
                        <span id={style.light}>(2,610)</span>
                    </p>
                    <p className="font-weight-bold">₹ 383 <strike>₹ 958</strike> <strong>(60% off)</strong></p>
                </button>
                <button className="btn col-md-3">
                    <img src={KnifeImg} alt="" width={140}/>
                    <p className="h5">Handmade Damascus Pocket Knife Rose Wood ...</p>
                    <p>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon> <span id={style.light}>(2,610)</span>
                    </p>
                    <p className="font-weight-bold">₹ 383 <strike>₹ 958</strike> <strong>(60% off)</strong></p>
                </button>
            </div>
        </div>
    )
}

export default PopularGifts