import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch,budget} = useContext(AppContext);
    const { currency } = useContext(AppContext);



    const submitEvent = (e) => {
        const value = e
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        })

    }
    
    return (
        <div className='alert alert-secondary'>

            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='cost'
                step='10'
                value={budget}
                onChange={(event) => submitEvent(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;

