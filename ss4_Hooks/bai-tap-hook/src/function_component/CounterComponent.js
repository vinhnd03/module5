import { useEffect, useState } from "react";

const CounterComponent = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment1 = () => {
        setCount1(count1 + 1);
        
    }

    const increment2 = () => {
        setCount2(count2 + 2);
    }

    const increment = (num, callback) => {
        callback(prev => prev + num);
    }

    useEffect(() => {
        console.log("count 1: " + count1);
    }, [count1])

    useEffect(() => {
        console.log("count 2: " + count2);
    }, [count2])

    return(
        <>
            <div>Count 1: {count1}</div>
            <button onClick={() => increment(1, setCount1)}>Add 1</button>
            <br />
            <div>Count 2: {count2}</div>
            <button onClick={() => increment(2, setCount2)}>Add 2</button>
        </>
    )
}
export default CounterComponent;
