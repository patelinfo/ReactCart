import React from 'react';
import {Redirect} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            redirect:false
        }
    }

    goToCart = () => {
        this.setState({
            redirect:true
        })
    }

    render(){
        if (this.state.redirect) {
            return  <Redirect  to="/cart/"/>
           
        }

        return (
            <div id="AppHeader">
                <div>All Items</div>
                <div >{this.props.itemAddedName} is added to Cart</div>
                <div><button onClick={() => this.goToCart()}>Go to Cart {this.props.totalItemCart}</button></div>
                
            </div>
        )
    }
}



export default Header