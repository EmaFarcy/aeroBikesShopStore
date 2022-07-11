import React from 'react';
import { createContext } from "react";
import { useState } from 'react';


export const CartContext= createContext(null);




const CartProvider= (props) => {
    const [cart, setCart]= useState([]);
    return (
        <CartContext.Provider 
            value={{
                        cart, 
                        setCart
                    }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;