import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rabit from "./Images/Rabit.webp"
import Velvet from "./Images/Velvet.jpg"
import Planter from "./Images/Planter.webp"

const EditorsPicks2 =()=>{
    return (
        <table id={style.editorspick2}>
        <tr>
            <td colSpan={2}>
                <button id={style.writings}>
                    <p id={style.picks}>Editors' Picks</p> <br/> <br/>
                    <p id={style.shop}>The Diwali Shop</p> <br/> <br/>
                    <p id={style.unique}>Shop these unique finds <FontAwesomeIcon id={style.arrow} icon={ faLongArrowRight }></FontAwesomeIcon></p>
                </button>
            </td>
            <td>
                <button id={style.Rabbit}>
                    <img src={Rabit} alt=""/>
                </button>
            </td>
            <td>
                <button id={style.Velvet}>
                    <img src={Velvet} alt=""/>
                </button>
            </td>
            <td rowspan={2}>
                <button id={style.Planter}>
                    <img src={Planter} alt=""/>
                </button>
            </td>
        </tr>
    </table>
    )
}

export default EditorsPicks2