import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const {dispatch,currency} = useContext(AppContext);

    const handleChange = (event) => {
      const value = event.target.value;


      dispatch({
        type: 'CHG_CURRENCY',
        payload: value, 
        })

    };
  
    const options = [
      { value: '$', label: '$ Dollar' },
      { value: '£', label: '£ Pound' },
      { value: '€', label: '€ Euro' },
      { value: '₹', label: '₹ Ruppee' },
    ];
    
    return (
        <div className='alert alert-secondary'>
            <span>Currency </span>
            <select value={currency} onChange={handleChange} 
            style={{color: 'white', background: '#00ff00'}}>
                {options.map((option) => (
                <option key={option.value} value={option.value} >
                {option.label}
                </option>))}
            </select>
        </div>

    );
    

    

    /* -------------------------
    
    const submitEvent = (e) => {
        const newCurr = e
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurr,
        })

    }

    return (
        <div className='alert alert-secondary'>
            <span>Currency </span>
            
            <select 
                name='selectList' 
                id='selectList'
                required='required'
                value={currency}
                onChange={(event) => submitEvent(event.target.value)}>

                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
    */
};


export default Currency;

