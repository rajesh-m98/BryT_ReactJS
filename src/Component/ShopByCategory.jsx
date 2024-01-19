import React from "react";
import style from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SCHome from "./Images/SCHome.webp";
import SCJewellery from "./Images/SCJewellery.webp";
import SCCraft from "./Images/SCCraft.webp";
import SCArt from "./Images/SCArt.webp";
import SCClothing from "./Images/SCClothing.webp";
import SCBags from "./Images/SCBags.webp";

const ShopByCategory = () => {
  return (
    <div className="container-fluid">
        <div className="row mt-2">
            <div id={style.shopcategory}>
                <p className="h3 text-center font-weight-bold mt-3">Shop By Category</p> <br />
                <div className="row text-center p-3">
                    <div className="col-md-2">
                        <button className="btn btn-borderless">
                            <img src={SCHome} className="img rounded" alt="" height={260} width={140} /> <br /> <br />
                            <p>Home & Living</p>
                        </button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-borderless">
                            <img src={SCJewellery} className="img rounded" alt="" height={260} width={140} /> <br /> <br />
                            <p>Jewellery</p>
                        </button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-borderless">
                            <img src={SCCraft} className="img rounded" alt="" height={260} width={140} /> <br /> <br />
                            <p>Craft & Tools</p>
                        </button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-borderless">
                            <img src={SCArt} className="img rounded" alt="" height={260} width={140} /> <br /> <br />
                            <p>Arts & Collectibles</p>
                        </button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-borderless">
                            <img src={SCClothing} className="img rounded" alt="" height={260} width={140} /> <br /> <br />
                            <p>Clothing</p>
                        </button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-borderless">
                            <img src={SCBags} className="img rounded" alt="" height={260} width={140} /> <br /> <br />
                            <p>Bags & Purses</p>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="mt-2 text-center p-3">
                        <button id={style.showmore} className="btn-fluid btn-borderless rounded p-3 w-50 font-weight-bold col-md-12">Show More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ShopByCategory;
