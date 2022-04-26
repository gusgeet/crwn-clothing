import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-dropdown.context';

import { CartIconContainer, ItemCount, ShoppingIconSt } from './cart-icon.styles';

const CartIcon = () => {
  const{ isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIconSt />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon