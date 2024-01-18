import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
// import Home from './Images/Home.webp'
import Home from "./Images/Home.webp"
import Jewellery from "./Images/Jewellery.webp"
import Clothing from "./Images/Clothing.webp"
import Weddings from "./Images/Weddings.webp"
import Gifts from "./Images/Gifts.webp"
import Fashion from "./Images/Fashion.webp"

const Discover =()=>{
    return (
        <div id={style.discover}>
        <div id={style.para}>
           <p> Discover festive finds for all your celebrations from talented sellers.</p>
        </div>
        <div id={style.images}>
            <button>
                <img src={Home} alt=""/> <br/> <br/>
                <p>Home & Living</p>
            </button>
            <button>
                <img src={Jewellery} alt=""/> <br/> <br/>
                <p>Jewellery</p>
            </button>
            <button>
                <img src={Clothing} alt=""/> <br/> <br/>
                <p>Clothing</p>
            </button>
            <button>
                <img src={Weddings} alt=""/> <br/> <br/>
                <p>Weddings</p>
            </button>
            <button>
                <img src={Gifts} alt=""/> <br/> <br/>
                <p>Gifts</p>
            </button>
        </div>
      </div>
    )
}

export default Discover