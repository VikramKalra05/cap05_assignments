import { useState, useEffect } from "react";

function Timer(){
    const [count, setCount] = useState(10);
    let intervalId;

    useEffect(()=>{
        intervalId = setInterval(()=>{
            setCount((prevCount)=>{
                if(prevCount === 0){
                    clearInterval(intervalId);
                    return prevCount;
                }
                return prevCount - 1;
            })
        },1000)

        return ()=>{
            console.log("Cleanup Function is called");
            clearInterval(intervalId);
        }

    },[])

    return (
        <h1>{count}</h1>
    )
}

function App(){
    const [flag, setFlag] = useState(false);

    const handleToggle = ()=>{
        setFlag(!flag);
    }

    return (
        <>
            <h1>Timer</h1>
            <button onClick={handleToggle}>Toggle Timer</button>
            {flag && <Timer/>}
        </>
    )
}

export default App;