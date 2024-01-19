import React from "react";
import style from "./festivepicks.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FestiveShop from "./Images/Festive Shop.webp";
import ForYourHome from "./Images/For Your Home.webp";
import Kitchen from "./Images/Kitchen.webp";
import GiftsForHer from "./Images/Gifts for Her.webp";

const FestivePicks = () => {
  return (
    <div className="container-fluid p-3 text-center" id={style.festivepicks}>
        <div className="row">
            <div className="col-md-12">
                <p className="h4">Shop our top festive picks for you <FontAwesomeIcon id={style.arrow} icon={faLongArrowRight}></FontAwesomeIcon></p> <br/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <p className="h5">Curated collections hand-picked by Bryt editors</p> <br/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <button className="btn">
                    <img src={FestiveShop} alt="" width={200} height={180}/> <br/> <br/>
                    <p>The Festive Shop</p>
                </button>
            </div>
            <div className="col-md-3">
                <button className="btn">
                    <img src={ForYourHome} alt="" width={200} height={180}/> <br/> <br/>
                    <p>For Your Home</p>
                </button>
            </div>
            <div className="col-md-3">
                <button className="btn">
                    <img src={Kitchen} alt="" width={200} height={180}/> <br/> <br/>
                    <p>Kitchen and Dining</p>
                </button>
            </div>
            <div className="col-md-3">
                <button className="btn">
                    <img src={GiftsForHer} alt="" width={200} height={180}/> <br/> <br/>
                    <p>Gifts for Her</p>
                </button>
            </div>
        </div>
    </div>
  );
}

export default FestivePicks;
