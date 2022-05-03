import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from '../../utils/reducer/reducer.utils';



const addCartItem = (cartItems, productToAdd) =>{
    const existingCartItem = cartItems.find((cartItem) => 
        cartItem.id === productToAdd.id   
    )

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem)
    }
    
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItemToRemove = cartItems.find((cartItem) =>
        cartItem.id === cartItemToRemove.id
    )

    if(existingCartItemToRemove.quantity === 1) {
        return cartItems.filter(productT => productT.id !== existingCartItemToRemove.id)  
    }
    //return cartItems.filter(productT => productT.id === existingCartItemToRemove.id)

    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
    )
}

const removeIt = (cartItems, cartItemToRemove) => cartItems.filter(productT => productT.id !== cartItemToRemove.id)  

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }

export const removeItem = (cartItems, cartItemToRemove) => {
        const newCartItems = removeIt(cartItems, cartItemToRemove);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
