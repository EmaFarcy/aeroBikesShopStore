import React from 'react';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import './ItemCount.css';

export const ItemCount= ({ initial, stock, onAdd}) => {
    const[count, setCount]= useState(parseInt(initial));

    const increase = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    useEffect(() =>{
        setCount(parseInt(initial));

    }, [initial])

    return (
        <div className="counter">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
            <div>
                <Link
                type="button" to="/cart"
                className="btn btn-info" disable={stock <=0} onClick={()=> onAdd(count)}>
                Add To Cart
                </Link>
            </div>
        </div>
    );
}

export default ItemCount;