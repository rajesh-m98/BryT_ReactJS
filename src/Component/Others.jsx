import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
// import './path/to/bootstrap.css'

const Others =()=>{
    return (
        <div className="container-fluid">
            <div className="row">
                <div id={style.appdownload} className="col-md-5 p-5">
                    <button id={style.brytapp} className="btn btn-dark bg-warning font-weight-bold mt-5">BryT</button> <br /> <br />
                    <button id={style.download} className="btn btn-primary mt-5">Download Bryt App</button>
                </div>
                <div id={style.links} className="col-md-7 d-md-block d-none">
                    <table>
                        <tr>
                            <td><p className="text-white" id={style.head}>Shop</p></td>
                            <td><p className="text-white" id={style.head}>Sell</p></td>
                            <td><p className="text-white" id={style.head}>About</p></td>
                            <td><p className="text-white" id={style.head}>Help</p></td>
                        </tr>
                        <tr>
                            <td><p className="text-white">Gift Cards</p></td>
                            <td><p className="text-white">Sell on Bryt</p></td>
                            <td><p className="text-white">Bryt, Inc.</p></td>
                            <td><p className="text-white">Help Centre</p></td>
                        </tr>
                        <tr>
                            <td><p className="text-white">Bryt Registry</p></td>
                            <td><p className="text-white">Teams</p></td>
                            <td><p className="text-white">Policies</p></td>
                            <td><p className="text-white">Privacy Settings</p></td>
                        </tr>
                        <tr>
                            <td><p className="text-white">Sitemap</p></td>
                            <td><p className="text-white">Forums</p></td>
                            <td><p className="text-white">Investors</p></td>
                            <td><p className="text-white">Contact Us</p></td>
                        </tr>
                        <tr>
                            <td><p className="text-white">Bryt Blog</p></td>
                            <td><p className="text-white">Affiliates & Creators</p></td>
                            <td><p className="text-white">Carrers</p></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><p className="text-white">Bryt United Kingdom</p></td>
                            <td></td>
                            <td><p className="text-white">Press</p></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><p className="text-white">Bryt Germany</p></td>
                            <td></td>
                            <td><p className="text-white">Impact</p></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><p className="text-white">Bryt Canada</p></td>
                            <td></td>
                            <td><p className="text-white">Legal Imprint</p></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Others

