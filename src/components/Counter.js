import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../features/counter/counterSlice';
import { useDispatch } from 'react-redux';

const Counter = () => {
const count = useSelector((state) => state.test.count);
const dispatch = useDispatch();
const [Amount, setAmount] = useState(0);

const addValue = Number(Amount) || 0;

const resetAll = () =>{
    setAmount(0);
    dispatch(reset());
}

  return (
    <div>
        Counter
        <section>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input type="text" value={Amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={() => dispatch(resetAll)}>Reset</button>
        </section>
    </div>
    
  )
}

export default Counter