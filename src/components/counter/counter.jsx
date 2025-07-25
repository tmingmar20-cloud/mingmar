import React, { useState } from 'react'

const Counter = () => {
    const [increase, setIncrease] = useState(0);
    const handleIncrease = () => {
        setIncrease(increase + 1);
    }
    const handleDecrease = () => {
        setIncrease(increase - 1);
    }
    return (
        <div>
            <h1>{increase}</h1>
            <button onClick={handleIncrease}>Increase</button> <br></br>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}
export default Counter