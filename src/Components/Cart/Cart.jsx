/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selectedActors, remaining, totalCost}) => {
    console.log(selectedActors)
    return (
        <div>
            <h2>Total Artist: {selectedActors.length}</h2>
            <h3>Remaining: {remaining}</h3>
            <h4>Total Cost: {totalCost}</h4>
            {
                selectedActors.map(actor =>(
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;