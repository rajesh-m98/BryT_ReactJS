import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Nav =()=>{
    return (
        <div id={style.nav} className="container-fluid">
            <div className="row">
                <p className="h5 col-md-12 text-center mt-2"> Find the PERFECT present for all your loved ones. Go on, explore our <span>Gift Guide</span> now!</p>
            </div>
        </div>
    )
}

export default Nav