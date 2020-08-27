import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Pizzaman from "../../assets/PizzaMan.png";
import './Checkout.css';

export default function Checkout({ ingredients }) {
  const history = useHistory();
  const [success, setSuccess] = useState(false);

  return (
    <div className='checkoutCont'>
      <div className='checkComp'>
        <div>
          <h1>My Ingredients</h1>
          {Object.keys(ingredients).map((ingredient) => {
            return (
              ingredients[ingredient]&& (
                <p>{ingredient[0].toUpperCase()}{ingredient.substr(1)}</p>
              )
            );
          })}
          <button
            className="proceedToCheckout"
            onClick={() => history.push("/")}
          >
            Go Back
          </button>
          <button
            onClick={() => setSuccess(true)}
            className="proceedToCheckout"
          >
            Confirm
          </button>
        </div>
      </div>
      <div className='succComp'>
        {success && (
          <div className='successWrap'>
            <img className='pizzaman' src={Pizzaman} alt="pizzaman"/>
            <div className='confirmTitle'>
              We have received your order, Thank you
            </div>
            <div className='confirmOrder'>
              Order #{Math.round(Math.random() * 100000)}
            </div>
            <div className='confirmTime'>
              Will be ready in 20-30 min.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}