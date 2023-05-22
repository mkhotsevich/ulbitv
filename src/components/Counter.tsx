import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrementClick = () => {
        setCounter(counter + 1)
    }

    const handleDecrementClick = () => {
        setCounter(counter - 1)
    }

    return (
        <div className={classes.button}>
            <div>{counter}</div>
            <button onClick={handleIncrementClick}>increment</button>
            <button onClick={handleDecrementClick}>decrement</button>
        </div>
    );
};

