import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faTwitch, faFacebook, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false, showCartState: false, cart: '', one: false, two: false, three: false, four: false, onePrice: 69.99, twoPrice: 35.99, threePrice: 69.99, fourPrice: 32.99, oneName: 'Black "6" Hoodie', twoName: '"95" Long Sleeve', threeName: 'Camo Hoodie', fourName: '"Paris" Long Sleeve', oneNum: 0, twoNum: 0, threeNum: 0, fourNum: 0, removeOne: 'one', removeTwo: 'two', removeThree: 'three', removeFour: 'four'
        }

        this.addCart = this.addCart.bind(this)
        this.addOrder = this.addOrder.bind(this)
        this.minusOrder = this.minusOrder.bind(this)
        this.removeCart = this.removeCart.bind(this)
        this.showCart = this.showCart.bind(this)
        this.showCartMenu = this.showCartMenu.bind(this)
    }

    clickedCart() {
        return ((this.state.clicked === false) ? "cart-menu-hide" : "cart-menu")

    }



    addCart() {

        this.setState({
            clicked: true
        })

    }

    addOne() {
        this.setState({
            one: true,
            oneNum: 1
        })
    }

    addTwo() {
        this.setState({
            two: true,
            twoNum: 1
        })
    }

    addThree() {
        this.setState({
            three: true,
            threeNum: 1
        })
    }

    addFour() {
        this.setState({
            four: true,
            fourNum: 1
        })
    }

    addOrder(e) {
        if (e.currentTarget.id === "oneNum") {
            this.setState(prevState => ({
                oneNum: (prevState.oneNum + 1)
            }))

        } else if (e.currentTarget.id === "twoNum") {
            this.setState(prevState => ({
                twoNum: (prevState.twoNum + 1)
            }))

        } else if (e.currentTarget.id === "threeNum") {
            this.setState(prevState => ({
                threeNum: (prevState.threeNum + 1)
            }))

        } else if (e.currentTarget.id === "fourNum") {
            this.setState(prevState => ({
                fourNum: (prevState.fourNum + 1)
            }))

        }
    }

    minusOrder(e) {
        if (e.currentTarget.id === "oneNum") {
            if (this.state.oneNum > 0) {
                this.setState(prevState => ({
                    oneNum: (prevState.oneNum - 1)
                }))
            }
        } else if (e.currentTarget.id === "twoNum") {
            if (this.state.twoNum > 0) {
                this.setState(prevState => ({
                    twoNum: (prevState.twoNum - 1)
                }))
            }
        } else if (e.currentTarget.id === "threeNum") {
            if (this.state.threeNum > 0) {
                this.setState(prevState => ({
                    threeNum: (prevState.threeNum - 1)
                }))
            }
        } else if (e.currentTarget.id === "fourNum") {
            if (this.state.fourNum > 0) {
                this.setState(prevState => ({
                    fourNum: (prevState.fourNum - 1)
                }))
            }
        }





    }

    removeCart(e) {
        if (e.currentTarget.id === 'one') {
            this.setState({
                [e.currentTarget.id]: false,
                oneNum: 0
            })
        } else if (e.currentTarget.id === 'two') {
            this.setState({
                [e.currentTarget.id]: false,
                twoNum: 0
            })
        } else if (e.currentTarget.id === 'three') {
            this.setState({
                [e.currentTarget.id]: false,
                threeNum: 0
            })
        } else if (e.currentTarget.id === 'four') {
            this.setState({
                [e.currentTarget.id]: false,
                fourNum: 0
            })
        }

    }

    checkCart(value, price, name, num, order, remove) {
        if (value === true) {
            return (
                <div>
                    <div className="remove-cart" id={remove} onClick={this.removeCart}>X</div>
                    <p>{name}</p>
                    <div className="cart-item">
                        <p><span id={order} value={num} onClick={this.minusOrder}><b>-</b></span>  {num}  <span value={num} id={order} onClick={this.addOrder}><b>+</b></span></p>
                        <p>{price}</p>
                    </div>
                </div>
            )
        }
    }


    total() {
        var total = (this.state.onePrice * this.state.oneNum) + (this.state.twoPrice * this.state.twoNum) + (this.state.threePrice * this.state.threeNum) + (this.state.fourPrice * this.state.fourNum)
        console.log(total)
        return (total.toFixed(2))
    }


    openCart() {
        if (this.state.showCart === false) {
            this.setState({
                showCart: true
            })
        } else if (this.state.showCart === true) {
            this.setState({
                showCart: false
            })
        }

    }

    showCart() {
        return ((this.state.showCartState === false) ? 'hide-cart' : 'show-cart')

    }

    showCartMenu() {
        this.setState(prevState => ({
            showCartState: (!prevState.showCartState)
        }))
    }

    render() {
        return (
            <div>
                <div className="social shop-cart">
                    <div className='cart-menu-hide'>
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                    </div>
                    <FontAwesomeIcon icon={faTwitch} size="2x" className="twitch" />
                    <FontAwesomeIcon icon={faYoutube} size="2x" className="youtube" />
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter" />
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="insta" />
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook" />
                    <FontAwesomeIcon icon={faPatreon} size="2x" className="patreon" />
                    <div className={this.clickedCart()} onClick={this.showCartMenu}>
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                    </div>

                    <div className={this.showCart()}>
                        {this.checkCart(this.state.one, this.state.onePrice, this.state.oneName, this.state.oneNum, 'oneNum', this.state.removeOne)}
                        {this.checkCart(this.state.two, this.state.twoPrice, this.state.twoName, this.state.twoNum, 'twoNum', this.state.removeTwo)}
                        {this.checkCart(this.state.three, this.state.threePrice, this.state.threeName, this.state.threeNum, 'threeNum', this.state.removeThree)}
                        {this.checkCart(this.state.four, this.state.fourPrice, this.state.fourName, this.state.fourNum, 'fourNum', this.state.removeFour)}
                        <h3>Total: {this.total()} + tax</h3>
                        <input type="submit" value="Check Out" className="checkout"></input>
                    </div>
                </div>
                <div className="shop">
                    <div className="shop-showcase">
                        <img src={require("../img/showcase.png")} />
                        <div className="price">
                            <p>Black "6" Hoodie : 69.99 </p>
                            <div onClick={() => {
                                this.addCart();
                                this.addOne()
                            }} >
                                <FontAwesomeIcon icon={faShoppingCart} className="cart" /></div>
                        </div>
                    </div>

                    <div className="shop-95">
                        <img src={require("../img/95.png")} />
                        <div className="price">
                            <p>"95" Long Sleeve : 35.99</p>
                            <div onClick={() => {
                                this.addCart();
                                this.addTwo()
                            }} >
                                <FontAwesomeIcon icon={faShoppingCart} className="cart" /></div>
                        </div>
                    </div>
                    <div className="shop-hoodie">
                        <img src={require("../img/hoodie.png")} />
                        <div className="price">
                            <p>Camo Hoodie: 69.99</p>
                            <div onClick={() => {
                                this.addCart();
                                this.addThree()
                            }} >
                                <FontAwesomeIcon icon={faShoppingCart} className="cart" /></div>
                        </div>
                    </div>
                    <div className="shop-paris">
                        <img src={require("../img/paris.png")} />
                        <div className="price">
                            <p>"Paris" Long Sleeve : 32.99</p>
                            <div onClick={() => {
                                this.addCart();
                                this.addFour()
                            }} >
                                <FontAwesomeIcon icon={faShoppingCart} className="cart" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
