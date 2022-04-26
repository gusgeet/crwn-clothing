import { createContext, useState, useEffect } from "react";


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




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeCartItem: () => {},
    removeItem: () => {},
    cartCount: 0,
    cartTotal: 0
});



export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartcount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => 
            total + cartItem.quantity, 0)
            setCartcount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => 
            total + cartItem.price * cartItem.quantity, 
            0);
            setCartTotal(newCartTotal);
    }, [cartItems])




    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const removeItem = (cartItemToRemove) => {
        setCartItems(removeIt(cartItems, cartItemToRemove))
    }

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemToCart, 
        removeItem,
        cartItems, 
        cartCount,
        cartTotal};
     

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}