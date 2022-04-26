import { useContext } from 'react';

import { CheckoutContainer, CheckOutHeader,HeaderBlock, Total } from './checkout.styles';

import { CartContext } from '../../contexts/cart-dropdown.context';

import CheckoutItem from '../checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  

  return (
    <CheckoutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
            </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
            </HeaderBlock>
        <HeaderBlock>
        <span>Quantity</span>
            </HeaderBlock>
        <HeaderBlock>
        <span>Price</span>
            </HeaderBlock>
        <HeaderBlock>
        <span>Remove</span>
            </HeaderBlock>
          </CheckOutHeader>
        {
          cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        } 
        <Total> Total: ${cartTotal}</Total>
    </CheckoutContainer>

  )
}

export default Checkout