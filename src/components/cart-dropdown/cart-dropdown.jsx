import React from "react";

import CustomButton from '../custom-button/custom-button'

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>IR A CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;