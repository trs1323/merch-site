import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div><Link to="/merch-site/"><p>Home</p></Link></div>
                <div><Link to="/shop"><p>Shop</p></Link></div>
                <div><h1>Merch Name</h1></div>
                <div><Link to="/faq"><p>FAQ</p></Link></div>
                <div><Link to="/about"><p>About</p></Link></div>
            </div>
        )
    }
}
