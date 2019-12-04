import React from 'react';
import {Link} from 'react-router-dom';

class Cart extends React.Component{
    
    render(){
       
        return(
            <div>
                 <Link to={'/'}>Back to Home Page</Link>
                 {this.props.name}
                 <div>
                    <table >
                            <thead>
                                <tr>
                                    <th>items</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr>
                                     <td>Item2</td>
                                     <td>10</td>
                                     <td>$750</td>
                                 </tr>
                            </tbody>
                    </table>
                 </div>   
            </div>
        )
    }
}

export default Cart