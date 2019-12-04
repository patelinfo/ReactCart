import React from 'react';
import BookCSS from './book.module.css'

class Book extends React.Component{
   
     

    render(){

        const {id,name,price,discount,type,img_url} = this.props
        const discountedPrice = price - (Math.floor(price*discount)/100) 
      
        return (
            <div className={BookCSS.bookCtr} id={id} >
                <span className={BookCSS.discount}>{discount} %off</span>
                <img src={img_url} alt={type}/>
                <p>{name}</p>
                <p> Actual Price {price}</p>
                <p> discounted Price {discountedPrice}</p>
                <button onClick={() => this.props.onBookItemAdded(name,id)}> Add to cart</button>
            </div>
        )
    }
}
export default Book