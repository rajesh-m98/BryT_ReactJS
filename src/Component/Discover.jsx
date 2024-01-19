import React from "react";
import style from "./discover.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Images/Home.webp"
import Kitchen from "./Images/Kitchen.webp"
import Gifts from "./Images/Gifts for Her.webp"
import StaffPicks from "./Images/Staff Picks.webp"

const Discover =()=>{
    return (
        <div class="container-fluid mt-1 text-center bg-warning">
            <div class="row p-3" id={style.discover}>
                <p class="text-center h4 font-italic font-weight-bold mt-3">Discover festive finds for all your celebrations from talented sellers.</p>
                <div class="col-md-3 mt-5">
                    <img src={Home} class="img rounded-circle" width={150} height={120} alt=""/>
                    <p class="font-weight-bold mt-3">For Your Home</p>
                </div>
                <div class="col-md-3 mt-5">
                    <img src={Kitchen} class="img rounded-circle" width={150} alt="Image 1"/>
                    <p class="font-weight-bold mt-3">Kitchen & Dining</p>
                </div>
                <div class="col-md-3 mt-5">
                    <img src={Gifts} class="img rounded-circle" width={150} alt="Image 1"/>
                    <p class="font-weight-bold mt-3">Gifts for Her</p>
                </div>
                <div class="col-md-3 mt-5">
                    <img src={StaffPicks} class="img rounded-circle" width={150} alt="Image 1"/>
                    <p class="font-weight-bold mt-3">BryT Staff Picks</p>
                </div>
            </div>
        </div>
    )
}

export default Discover