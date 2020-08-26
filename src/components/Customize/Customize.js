import React from 'react';
import "./Customize.css";
import Cheese from '../../assets/BaseCheese.png';
import Base from '../../assets/PizzaBase.png';
import Olive from '../../assets/Olive.png';
import Pineapple from '../../assets/Pineapple.png';
import Mushroom from '../../assets/Mushroom.png';
import Basil from '../../assets/Basil.png';
import Tomato from '../../assets/Tomato.png';


export default function Customize() {
  return (
    <div className='customCont'>
      <div className='pizzaCont'>
        <div className='imgWrapper'>
          <img src={Cheese} alt='Cheese' className='ingredients' />
          <img src={Olive} alt='Olive' className='ingredients' />
          <img src={Pineapple} alt='Pineapple' className='ingredients' />
          <img src={Mushroom} alt='Mushroom' className='ingredients' />
          <img src={Basil} alt='Basil' className='ingredients' />
          <img src={Tomato} alt='Tomato' className='ingredients' />
          <img src={Base} alt='Pizza Base' className='pizzaBase'  />
        </div>
      </div>
      <div className='checkCont'>
        Checkbox
      </div>

    </div>
  )
}