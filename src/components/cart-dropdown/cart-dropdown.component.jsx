import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../store/cart/cart.selector';

import {
  CartDropContainer, 
  CartItemsStyled, 
  EmptyMsg} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
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