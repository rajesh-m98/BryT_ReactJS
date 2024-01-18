import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import SCHome from "./Images/SCHome.webp"
import SCJewellery from "./Images/SCJewellery.webp"
import SCCraft from "./Images/SCCraft.webp"
import SCArt from "./Images/SCArt.webp"
import SCClothing from "./Images/SCClothing.webp"
import SCBags from "./Images/SCBags.webp"

const ShopByCategory =()=>{
    return (
        <div id={style.shopcategory}>
        <p>Shop By Category</p> <br/>
        <div id={style.tables}>
            <button id={style.tables1}>
                <img src={SCHome} alt=""/> <br/> <br/>
                <p>Home & Living</p>
            </button>
            <button id={style.tables2}>
                <img src={SCJewellery} alt=""/> <br/> <br/>
                <p>Jewellery</p>
            </button>
            <button id={style.tables3}>
                <img src={SCCraft} alt=""/> <br/> <br/>
                <p>Craft Supplies & Tools</p>
            </button>
            <button id={style.tables4}>
                <img src={SCArt} alt=""/> <br/> <br/>
                <p>Arts & Collectibles</p>
            </button>
            <button id={style.tables5}>
                <img src={SCClothing} alt=""/> <br/> <br/>
                <p>Clothing</p>
            </button>
            <button id={style.tables6}>
                <img src={SCBags} alt=""/> <br/> <br/>
                <p>Bags & Purses</p>
            </button>
            <button id={style.showmore}>Show More</button>
        </div>
    </div>
    )
}

export default ShopByCategory