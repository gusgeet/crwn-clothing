import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart-dropdown.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropContainer, 
  CartItemsStyled, 
  EmptyMsg} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }


  return (
    <CartDropContainer>
        <CartItemsStyled>
          {
            cartItems.length ? (cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))) : (
              <EmptyMsg>Your cart is empty</EmptyMsg>
            )
            
          }
        </CartItemsStyled>
            {cartItems.length ? <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button> : ''}
    </CartDropContainer>
  )
}

export default CartDropdown