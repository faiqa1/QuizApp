import React from 'react'
import { useState, useEffect } from 'react'
export default function Test() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("Count has been updated:", count);
    }, [count]);

    const increment = () => {
        // Inside this function, count refers to the previous state
        setCount(prevCount => prevCount + 1);
        console.log(count)
    };

  return (
    <div>
       
      <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
    </div>
  )
}
