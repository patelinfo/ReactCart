import React from 'react';
import axios from 'axios';

import Book from './book';
import MainContentCSS from './MainContent.module.css'

class MainContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            books:[]
        }
    }

    componentDidMount(){
        axios.get("https://api.myjson.com/bins/qhnfp").then((res)=> {
           this.setState({
               books:res.data
           })   
        })       
    }

    bookItemAdded = (bookItemName,bookID) => {
        //console.log("MainContent book item added"+ bookItem)
        this.props.onItemAdded(bookItemName,bookID)
    }

    render(){

       const booksArr = this.state.books  

        return (
           <div id={MainContentCSS.MainContent}> 
               {
                  booksArr.map((book)=> {
                  return <Book key={book.id} {...book} onBookItemAdded = {(bookName,bookID) => this.bookItemAdded(bookName,bookID)}></Book>

                  
                 })
              }
             
            </div> )
    }
} 

export default MainContent