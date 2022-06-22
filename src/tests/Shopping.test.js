import React from "react";
import ShopContainer from "../containers/ShopContainer";
import { render, fireEvent } from "@testing-library/react";
import ShopDisplay from "../components/ShopDisplay";
import Cart from "../components/Cart"

describe('ShopContainer', () => {
    let container;
    let h1;
    let dropdown;
    let addItemToBasket;
    let cartItems;


beforeEach(() => {
    container = render(<ShopContainer />)
    h1 = container.getByTestId("header1");
    dropdown = container.getByTestId("dropdown-select");
    addItemToBasket = container.getByTestId("add-button");
    cartItems = container.getByTestId("cart-list")
})

it('should display header', () => {
expect(h1.textContent).toEqual('Shop Container');
})

it('should be able to add item to basket', () => {
    fireEvent.click(dropdown)
    fireEvent.click(addItemToBasket)
    expect(queryByTestId(cartItems)).toBeTruthy();
})

})