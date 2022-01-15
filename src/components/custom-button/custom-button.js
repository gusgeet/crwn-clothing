import react from "react";

import './custom-button.scss';

const CustomButton = ({
    children, 
    isGoogleSignIn, 
    inverted ,
    ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : 'google-sign-in'} custom-button` } {...otherProps}>
        {children}
    </button>
)

export default CustomButton;