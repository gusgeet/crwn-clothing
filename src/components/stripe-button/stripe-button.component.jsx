import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price  *100 ;
    const publishableKey = 'pk_test_51KK1z7B32CIsiO3st2eL1qSVOs7h7g8I3oYrPr6JlabEm9COvMD5WySUr24gRZG0YUGllpkjCjwhBxrW5Mw2QqeP00Xo8Kithm';

    const onToken = token => {
        console.log(token);
        alert('Payment successful!')
    }

    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;