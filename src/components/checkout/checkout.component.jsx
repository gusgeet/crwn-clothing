import { 
  CheckoutContainer, 
  CheckOutHeader,
  HeaderBlock, 
  Total } 
from './checkout.styles';

import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../checkout-item/checkout-item.component';
import PaymentForm from '../payment-form/payment-form.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
        <PaymentForm />
    </CheckoutContainer>

  )
}

export default Checkout