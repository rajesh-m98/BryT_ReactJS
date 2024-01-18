import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FestiveShop from "./Images/Festive Shop.webp"
import ForYourHome from "./Images/For Your Home.webp"
import Kitchen from "./Images/Kitchen.webp"
import GiftsForHer from "./Images/Gifts for Her.webp"
import StaffPicks from "./Images/Staff Picks.webp"

const FestivePicks =()=>{
    return (
        <table id={style.festivepicks} cellspacing={10}>
        <tr>
            <td colspan={5}>
                <p id={style.toppicks}>Shop our top festive picks for you <FontAwesomeIcon id={style.arrow} icon={faLongArrowRight}></FontAwesomeIcon></p> <br/>
            </td>
        </tr>
        <tr>
            <td colspan={5}>
                <p id={style.collections}>Curated collections hand-picked by Bryt editors</p> <br/>
            </td>
        </tr>
        <tr>
            <td>
                <button>
                    <img src={FestiveShop} alt=""/> <br/> <br/>
                    <p>The Festive Shop</p>
                </button>
            </td>
            <td>
                <button>
                    <img src={ForYourHome} alt=""/> <br/> <br/>
                    <p>For Your Home</p>
                </button>
            </td>
            <td>
                <button>
                    <img src={Kitchen} alt=""/> <br/> <br/>
                    <p>Kitchen and Dining</p>
                </button>
            </td>
            <td>
                <button>
                    <img src={GiftsForHer} alt=""/> <br/> <br/>
                    <p>Gifts for Her</p>
                </button>
            </td>
            <td>
                <button>
                    <img src={StaffPicks} alt=""/> <br/> <br/>
                    <p>Bryt Staff Picks</p>
                </button>
            </td>
        </tr>
        </table>
    )
}

export default FestivePicks

