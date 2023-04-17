import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [val, setVal] = useState(0);

    const decrement = () => setVal(val - 1);
    const increment = () => setVal(val + 1);

    return (
        <div className="counter">
            <p> Functional Component </p>
            <div className="inner">
                <div className="interactive">
                    <button className="btn" onClick={decrement}>
                        {'\u2212'}
                    </button>

                    <p> { val } </p>

                    <button className="btn" onClick={increment}>
                        {'\uff0b'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
