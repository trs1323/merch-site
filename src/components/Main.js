import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faTwitch, faFacebook, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";


export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="social">
                    <FontAwesomeIcon icon={faTwitch} size="2x" className="twitch" />
                    <FontAwesomeIcon icon={faYoutube} size="2x" className="youtube" />
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter" />
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="insta" />
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook" />
                    <FontAwesomeIcon icon={faPatreon} size="2x" className="patreon" />

                </div>
                <div className="showcase">
                    <Link to="/shop">
                        <img src={require("../img/showcase.jpg")} /></Link>
                    <p>Black "6" Hoodie : 69.99 </p>
                </div>
                <div className="email">
                    <p>Sign up for informantion about upcoming releases</p>
                    <form>
                        <input type="text" className="text"></input>
                        <input type="submit" value="Sign Up" className="submit"></input>
                    </form>
                </div>
                <div className="grid">
                    <div className="pic-1">
                        <img src={require("../img/hoodie.png")} />
                        <Link to="/shop"><div className="pic-1-info">
                            <p>Camo Hoode: 69.99</p>
                        </div></Link>
                    </div>
                    <div className="pic-2">
                        <img src={require("../img/95.png")} />
                        <Link to="/shop"><div className="pic-2-info">
                            <p>"95" Long Sleeve : 35.99</p>
                        </div></Link>
                    </div>
                    <div className="pic-3">
                        <img src={require("../img/paris.png")} />
                        <Link to="/shop"><div className="pic-3-info">
                            <p>"Paris" Long Sleeve : 32.99</p>
                        </div></Link>
                    </div>
                </div>
            </div>
        )
    }
}
