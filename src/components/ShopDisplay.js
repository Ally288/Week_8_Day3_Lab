import React from "react";

const ShopDisplay = ({ items, onItemSelect, basket, setBasket, selectedItem }) => {
    
    const handleSelect = (event) => {
        const chosenIndex = event.target.value;
        const chosenItem = items[chosenIndex]
        onItemSelect(chosenItem);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newItem = selectedItem
        const updatedItems = [...basket, newItem];
        setBasket(updatedItems);
    }

    const options = items.map((item, index) => {
        return <option key={index} value={index}>{item.itemName} - £{item.itemPrice.toFixed(2)}</option>
    })

    return (
        <div>
            <select data-testid="dropdown-select" onChange={handleSelect}>
                <option defaultValue="">Select a Fruit</option>
                {options}
            </select>
            <form onSubmit={handleFormSubmit} >
                <input data-testid="add-button" type="submit" value="Add to Basket" />
            </form>
        </div>
    )
}

export default ShopDisplay;