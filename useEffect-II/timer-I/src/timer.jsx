import { useState, useEffect } from "react";

function App(){
    const [count, setCount] = useState(10);

    useEffect(()=>{
        setInterval(()=>{
            setCount((prevCount)=>{
                if(prevCount === 0){
                    return prevCount;
                }
                return prevCount - 1;
            })
        },1000)
    },[])

    return (
        <>
            <h1>Timer</h1>
            <h1>{count}</h1>
        </>
    )
}

export default App;