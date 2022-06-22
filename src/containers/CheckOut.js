import React from "react";
import Cart from '../components/Cart';

const CheckOut = ({basket}) => {
    
    return (
        <div>
            <Cart basket={basket}/>
        </div>
    )
}

export default CheckOut;