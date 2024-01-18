import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Others =()=>{
    return (
        <div id={style.others}>
        <div id={style.appdownload}>
            <button id={style.logo}>Bryt</button> <br/> <br/>
            <button id={style.download}>Download the Bryt App</button>
        </div>
        <div id={style.links}>
            <table cellSpacing={20}>
                <tr>
                    <td><p id={style.head}>Shop</p></td>
                    <td><p id={style.head}>Sell</p></td>
                    <td><p id={style.head}>About</p></td>
                    <td><p id={style.head}>Help</p></td>
                </tr>
                <tr>
                    <td><p>Gift Cards</p></td>
                    <td><p>Sell on Bryt</p></td>
                    <td><p>Bryt, Inc.</p></td>
                    <td><p>Help Centre</p></td>
                </tr>
                <tr>
                    <td><p>Bryt Registry</p></td>
                    <td><p>Teams</p></td>
                    <td><p>Policies</p></td>
                    <td><p>Privacy Settings</p></td>
                </tr>
                <tr>
                    <td><p>Sitemap</p></td>
                    <td><p>Forums</p></td>
                    <td><p>Investors</p></td>
                    <td><p>Contact Us</p></td>
                </tr>
                <tr>
                    <td><p>Bryt Blog</p></td>
                    <td><p>Affiliates & Creators</p></td>
                    <td><p>Carrers</p></td>
                    <td></td>
                </tr>
                <tr>
                    <td><p>Bryt United Kingdom</p></td>
                    <td></td>
                    <td><p>Press</p></td>
                    <td></td>
                </tr>
                <tr>
                    <td><p>Bryt Germany</p></td>
                    <td></td>
                    <td><p>Impact</p></td>
                    <td></td>
                </tr>
                <tr>
                    <td><p>Bryt Canada</p></td>
                    <td></td>
                    <td><p>Legal Imprint</p></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
    )
}

export default Others

