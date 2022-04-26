import { CheckOutItemContainer, ImageContainer, Span, SpanQty, Value, Arrow, RemoveButton } from './checkout-item.styles';

import { CartContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem

    const { removeItem,  addItemToCart, removeItemToCart } = useContext(CartContext)

    const clearItemHandler = () => removeItem(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)



  return (
    <CheckOutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name} />
        </ImageContainer>
        <Span>{name}</Span>
        <SpanQty> 
            <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value> {quantity} </Value>
            <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </SpanQty>
        <Span>${price * quantity}</Span>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  )
}

export default CheckoutItem