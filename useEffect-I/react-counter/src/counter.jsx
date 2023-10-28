import { useEffect, useState } from "react";

function App(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Clicked ${count} times`
    })

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={handleClick}>Increment Counter</button>
        </>
    )
}

export default App;