import { 
    CartItemContainer, 
    ImgSt, 
    ItemDetails, 
    NameSpan,
    PriceSpan } 
from './cart-item.styles';

import React from 'react'

const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
    <CartItemContainer>
        <ImgSt src={imageUrl} alt={`${name}`}/>
        <ItemDetails>
            <NameSpan>{name}</NameSpan>
            <PriceSpan>{quantity} x ${price}</PriceSpan>
        </ItemDetails>
    </CartItemContainer>
    )
}

export default CartItem