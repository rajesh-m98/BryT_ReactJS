import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gour1 from "./Images/Gour1.webp"
import Gour from "./Images/Gour.webp"
import ShreeArt1 from "./Images/Shree Art1.webp"
import ShreeArt from "./Images/Shree ART.webp"
import Vishaka from "./Images/Vishaka.webp"
import ArtVishaka from "./Images/Art Vishakha.webp"

const LocalMakers =()=>{
    return (
        <div id={style.localmakers}>
        <table cellspacing={5}>
            <tr>
                <td>
                    <p id={style.localfinds}>Local finds? Bryt has it.</p> <br/> <br/>
                </td>
                <td>
                    <button id={style.localmakersbutton}>Shop from Local Makers  <FontAwesomeIcon id={style.arrow} icon={faLongArrowRight}></FontAwesomeIcon></button>
                </td>
            </tr>
            <tr>
                <td colspan={2}>
                    <p id={style.discover}>Discover shops in India</p>
                </td>
            </tr>
        </table>
        <div id={style.buttons}>
            <button id={style.bigsize}>
                <img src={Gour1} alt=""/> <br/>
                <p><img src={Gour} alt=""/>GourMoorti</p>
            </button>
            <button id={style.bigsize}>
                <img src={ShreeArt1} alt=""/> <br/>
                <p><img src={ShreeArt} alt=""/> Shree ART Interio</p>
            </button>
            <button id={style.bigsize}>
                <img src={Vishaka} alt=""/> <br/>
                <p><img src={ArtVishaka} alt=""/> ART By Vishaka Soni</p>
            </button>
        </div>
    </div>
    )
}

export default LocalMakers

