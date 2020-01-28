import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faTwitch, faFacebook, faPatreon } from '@fortawesome/free-brands-svg-icons'

export default class Faq extends Component {
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
                <div className="faq">
                    <h1>Frequently Asked Questions </h1>
                    <h3>1. Question One</h3>
                    <p>Fusce et tincidunt lorem, eu dictum lacus. Vestibulum egestas porttitor nisl non porttitor. Sed ac dignissim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dapibus nisi velit, eu eleifend sem lacinia rutrum. Pellentesque at magna aliquet mi suscipit sollicitudin fermentum tincidunt ipsum. Mauris quam lorem, fermentum at cursus vitae, viverra ut arcu. Aenean rutrum mollis porta. Etiam quis lorem dignissim, bibendum lacus eu, egestas justo. </p>
                    <h3>2. Question Two</h3>
                    <p>Fusce et tincidunt lorem, eu dictum lacus. Vestibulum egestas porttitor nisl non porttitor.</p>
                    <h3>3. Question Three</h3>
                    <p>Fusce et tincidunt lorem, eu dictum lacus. Vestibulum egestas porttitor nisl non porttitor. Sed ac dignissim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dapibus nisi velit, eu eleifend sem lacinia rutrum. Pellentesque at magna aliquet mi suscipit sollicitudin fermentum tincidunt ipsum. Mauris quam lorem, fermentum at cursus vitae, viverra ut arcu. Aenean rutrum mollis porta. Etiam quis lorem dignissim, bibendum lacus eu, egestas justo. Proin dapibus nisi velit, eu eleifend sem lacinia rutrum. Pellentesque at magna aliquet mi suscipit sollicitudin fermentum tincidunt ipsum. Mauris quam lorem, fermentum at cursus vitae, viverra ut arcu. Aenean rutrum mollis porta. Etiam quis lorem dignissim, bibendum lacus eu, egestas justo.</p>
                    <h3>4. Question Four</h3>
                    <p>Fusce et tincidunt lorem, eu dictum lacus. Vestibulum egestas porttitor nisl non porttitor. Sed ac dignissim magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dapibus nisi velit, eu eleifend sem lacinia rutrum. Pellentesque at magna aliquet mi suscipit sollicitudin fermentum tincidunt ipsum. Mauris quam lorem, fermentum at cursus vitae. </p>
                    <h3>5. Question Five</h3>
                    <p>Fusce et tincidunt lorem, eu dictum lacus. Vestibulum egestas porttitor nisl non porttitor. Sed ac dignissim magna. Class aptent taciti sociosqu ad litora torquent per . </p>
                </div>
            </div>
        )
    }
}
