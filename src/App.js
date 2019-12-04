import React from 'react';
import Header from './Component/Header'
import MainContent from './Component/MainContent'
import './App.css';

class App extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         itemAdded:'',
         booksInCart:[]
      }
   }

   onGetItemAdded = (bookItemName,bookItemID) => {

      var bookItemObj =  {}
      bookItemObj.ItemID = bookItemID;
      bookItemObj.quantity = 1;

      this.setState({
        itemAddedName:bookItemName,
        booksInCart:[ ...this.state.booksInCart,bookItemObj]      
      },()=> console.log(this.state.booksInCart))


   }

   render(){
     
     const totalBooksInCart  = this.state.booksInCart.length;

      return (
      
          <div className="App">
            <Header itemAddedName={this.state.itemAddedName} totalItemCart={totalBooksInCart}></Header>
            <MainContent onItemAdded={(bookItemName,bookItemID) => this.onGetItemAdded(bookItemName,bookItemID)}></MainContent>
          </div>
      
      );
   }
}

export default App;
