import React from "react";
import style from "./localmakers.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gour1 from "./Images/Gour1.webp";
import Gour from "./Images/Gour.webp";
import ShreeArt1 from "./Images/Shree Art1.webp";
import ShreeArt from "./Images/Shree ART.webp";
import Vishaka from "./Images/Vishaka.webp";
import ArtVishaka from "./Images/Art Vishakha.webp";

const LocalMakers = () => {
  return (
    <div className="container-fluid d-md-block d-none" id={style.localmakers}>
        <div className="row p-3">
            <p className="h4 col-md-6">Local finds? Bryt has it.</p>
            <p className="h3 mt-3 col-md-6 text-right">Discover shops in India</p>
        </div>
        <div className="row p-3">
            <div className="col-md-12 text-center">
                <button className="btn btn-success" id={style.localmakersbutton}>
                    Shop from Local Makers <FontAwesomeIcon id={style.arrow} icon={faLongArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
        <div className="row p-3">
            <div className="col-md-4">
                <button className="btn">
                    <img src={Gour1} alt="" width={300} height={360}/> <br />
                    <p className="h5"><img src={Gour} className="img-fluid rounded-circle" alt="" width={50} />GourMoorti</p>
                </button>
            </div>
            <div className="col-md-4">
                <button className="btn">
                    <img src={ShreeArt1} alt="" width={300} height={360}/> <br />
                    <p className="h5"><img src={ShreeArt} className="img-fluid rounded-circle" alt="" width={50} /> Shree ART Interio</p>
                </button>
            </div>
            <div className="col-md-4">
                <button className="btn">
                    <img src={Vishaka} alt="" width={300} height={360}/> <br />
                    <p className="h5"><img src={ArtVishaka} className="img-fluid rounded-circle" alt="" width={50} /> ART By Vishaka Soni</p>
                </button>
            </div>
        </div>
    </div>
  );
}

export default LocalMakers;
