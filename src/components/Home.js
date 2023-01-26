import {BsInstagram} from "react-icons/bs"
import {CiFacebook} from "react-icons/ci"
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Header from "./Header";

function Home(){
    return (
        <div className="home-container">
        <Header/>

            <div className="text-box">
                <p>I'M</p>
                <h1>MESHACK</h1>
                <h3>I MAKE BEAUTIFUL WEBSITES, CONTACT ME.</h3>

                <div className="row">
                    <a href="/#">Explore My Portfolio</a>
                    <a href="/#">Contact With Me <span>&#x27f6;</span></a>
                    <span>You Can Explore Mor About My Portfolio And <br/>Personal Life Experience</span>
                </div>
            </div>

            <div className="social-icons">
                <a href="https://www.linkedin.com/in/ohwoevwo-meshack-1544121b5/"><TiSocialLinkedinCircular className="img"/></a>
                <a href="https://web.facebook.com/meshack.ohwoevwo"><CiFacebook className="img"/></a>
                <a href="https://www.instagram.com/familys_home/"><BsInstagram className="img"/></a>
            </div>
        </div>
    )
}

export default Home;