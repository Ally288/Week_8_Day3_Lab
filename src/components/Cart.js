import React from "react";
import DiscountCode from './DiscountCode'

const Cart = ({basket}) => {

    const list = basket.map((item, index) => {
        return <li data-testid="cart-list" key={index}>{item.itemName} - £{item.itemPrice.toFixed(2)}</li>
    })

    const total = basket.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.itemPrice
    }, 0 )

    // const finalTotal = total 


    return (
        <div>
            <h1>Shopping basket</h1>
            <ul>
                {list}
            </ul>
            <DiscountCode />
            <p>
                Total: £{total.toFixed(2)}
            </p>
        </div>
    )
}

export default Cart;