import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../../features/counterSlice';

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState('');

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className='h-[100vh] flex flex-col gap-4 text-6xl items-center justify-center'>
      <p className='text-8xl mb-10'>{count}</p>
      <div className='flex gap-4'>
        <button
          className='p-1 flex items-center justify-center hover:bg-black hover:text-white text-black border-gray-400 bg-gray-400 rounded-sm w-[4rem]'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className='p-1 flex items-center justify-center hover:bg-black hover:text-white text-black border-gray-400 bg-gray-400 rounded-sm w-[4rem]'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <input
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div className='flex gap-4'>
        <button
          className='p-2 text-2xl flex items-center font-medium justify-center hover:bg-black hover:text-white text-black border-gray-400 bg-gray-400 rounded-sm'
          onClick={resetAll}
        >
          Reset
        </button>
        <button
          className='p-2 text-2xl flex items-center font-medium justify-center hover:bg-black hover:text-white text-black border-gray-400 bg-gray-400 rounded-sm'
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
      </div>
    </section>
  );
};

export default Counter;
