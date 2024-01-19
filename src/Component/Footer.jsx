import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer =()=>{
    return (
        <div className="container-fluid" id={style.foot}>
            <div className="row">
                <div className="col-md-4 text-center">
                    <button id={style.footer} className="btn bg-rounded">
                        <select>
                            <option value="en">English</option>
                            <option value="en">Hindi</option>
                            <option value="en">Urdu</option>
                            <option value="en">Kannada</option>
                        </select>
                        <select>
                            <option value="in">India</option>
                            <option value="in">UK</option>
                            <option value="in">US</option>
                            <option value="in">China</option>
                        </select>
                        <select>
                            <option value="inr">INR</option>
                            <option value="inr">Pound</option>
                            <option value="inr">Dollar</option>
                            <option value="inr">Renminbi</option>
                        </select>
                    </button>
                </div>
                <div id={style.buttons} className="col-md-8 d-md-block d-none">
                    <button id={style.butt1} className="btn btn-primary">© 2023 Bryt, Inc.</button>
                    <button className="btn text-white">Terms of Use</button>
                    <button className="btn text-white">Privacy</button>
                    <button className="btn text-white">Interest-based ads</button>
                    <button className="btn text-white">Local Shops</button>
                    <button className="btn text-white">Regions</button>
                </div>
            </div>
        </div>
    )
}

export default Footer

