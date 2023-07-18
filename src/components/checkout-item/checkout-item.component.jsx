import { CheckOutItemContainer, ImageContainer, Span, SpanQty, SpanNumber, Value, Arrow, RemoveButton } from './checkout-item.styles';

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItem, removeItemFromCart } from '../../store/cart/cart.action';


const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
  
    const clearItemHandler = () => dispatch(removeItem(cartItems,cartItem))
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))



  return (
    <CheckOutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name} />
        </ImageContainer>
        <Span>{name}</Span>
        <SpanQty> 
            <Arrow onClick={removeItemHandler}>-</Arrow>
                <Value> {quantity} </Value>
            <Arrow onClick={addItemHandler}><SpanNumber>+</SpanNumber></Arrow>
        </SpanQty>
        <Span>${price * quantity}</Span>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  )
}

export default CheckoutItem