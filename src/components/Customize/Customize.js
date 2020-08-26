import React from 'react';
import "./Customize.css";
import Cheese from '../../assets/BaseCheese.png';
import Base from '../../assets/PizzaBase.png';
import Olive from '../../assets/Olive.png';
import Pineapple from '../../assets/Pineapple.png';
import Mushroom from '../../assets/Mushroom.png';
import Basil from '../../assets/Basil.png';
import Tomato from '../../assets/Tomato.png';


export default function Customize({ingredients, setIngredients}) {

  const onChange = (event, name) => {
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
    setIngredients(newIngredients);
  }


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
      <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")
            }
          />
          <span className="checkmark"></span>
        </label>
      </div>

    </div>
  )
}