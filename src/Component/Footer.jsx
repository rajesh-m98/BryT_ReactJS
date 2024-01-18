import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer =()=>{
    return (
        <div id={style.footer}>
        <button id={style.country}>
            India | English (IN) | ₹ (INR) 
        </button>
        <div id={style.buttons}>
            <button id={style.butt1}>© 2023 Bryt, Inc.</button>
            <button>Terms of Use</button>
            <button>Privacy</button>
            <button>Interest-based ads</button>
            <button>Local Shops</button>
            <button>Regions</button>
        </div>
    </div>
    )
}

export default Footer

