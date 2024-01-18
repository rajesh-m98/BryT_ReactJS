import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resin from "./Images/Resin.webp"
import Homemade from "./Images/Handmade.webp"
import Brownfields from "./Images/Brownfields.webp"
import Brass from "./Images/Brass.webp"
import Foil from "./Images/Foil.webp"
import Rangoli from "./Images/Rangoli.webp"

const Editors =()=>{
    return (
        <div id={style.editors}>
            <div id={style.editorspick}>
                <button id={style.writings}>
                    <p id={style.picks}>Editors' Picks</p> <br/> <br/>
                    <p id={style.shop}>The Diwali Shop</p> <br/> <br/>
                    <p id={style.unique}>Shop these unique finds <FontAwesomeIcon id={style.arrow} icon={faLongArrowRight}></FontAwesomeIcon></p>
                </button>
                <button id={style.Resin}>
                    <img src={Resin} alt=""/>
                </button>
                <button id={style.Handmade}>
                    <img src={Homemade} alt=""/>
                </button>
                <button id={style.Brownfields}>
                    <img src={Brownfields} alt=""/>
                </button>
            </div>
            <div id={style.editorspick1}>
                <button id={style.Brass}>
                    <img src={Brass} alt=""/>
                </button>
                <button id={style.Foil}>
                    <img src={Foil} alt=""/>
                </button>
                <button id={style.Rangoli}>
                    <img src={Rangoli} alt=""/>
                </button>
                <button id={style.para}>
                    <p>Make your celebrations even <br/> 
                    more special with extraordinary <br/> 
                    finds!
                    </p>
                </button>
            </div>
        </div>
    )
}

export default Editors