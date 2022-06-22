import React, { useState } from "react";
import ShopDisplay from '../components/ShopDisplay';
import CheckOut from './CheckOut';

const ShopContainer = () => {

    const [items, setItems] = useState([
        {
            itemName: "apples",
            itemPrice: 2.00
        },
        {
            itemName: "bananas",
            itemPrice: 3.00
        },
        {   
            itemName: "oranges",
            itemPrice: 3.50
        },
        {
            itemName: "grapes",
            itemPrice: 2.50
        },
        {   
            itemName: "strawberries",
            itemPrice: 4.00
        }
    ]);

    const [basket, setBasket] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");

    const onItemSelect = (item) => {
        setSelectedItem(item);
    }


    
    return (
    <>
    <h1 data-testid="header1">Shop Container</h1>
    <ShopDisplay items={items} onItemSelect={onItemSelect} basket={basket} setBasket={setBasket} selectedItem={selectedItem}/>
    <CheckOut basket={basket}/>
    </>
    )
}

export default ShopContainer;