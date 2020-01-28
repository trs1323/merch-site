import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faTwitch, faFacebook, faPatreon } from '@fortawesome/free-brands-svg-icons'

export default class About extends Component {
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
                <div className="about">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum ipsum eget odio dapibus porta. Nulla maximus, risus et interdum tristique, mauris urna lobortis turpis, nec semper felis sapien gravida ipsum. In hac habitasse platea dictumst. Nam dapibus eros et enim sagittis luctus vel faucibus neque. Duis et leo sed turpis tempus imperdiet quis et nibh. Nulla pellentesque urna vitae ipsum ullamcorper porta. Curabitur tincidunt purus vitae dui pulvinar, aliquam accumsan urna pulvinar. Sed pulvinar, lectus pulvinar pellentesque pharetra, enim mauris rhoncus augue, vel suscipit erat orci vel libero. Aenean ac augue ex. Vestibulum et dolor id felis congue interdum eu eget ex. Maecenas sed quam ac orci vehicula ullamcorper non sed nunc. Integer facilisis dolor ante, id accumsan ipsum lobortis sed. </p>
                </div>
            </div>
        )
    }
}
