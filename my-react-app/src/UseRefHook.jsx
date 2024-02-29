import React, {useState, useEffect, useRef} from 'react';

function UseRefHook(){

    const inputRef = useRef(0);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
        <button onClick={handleClick}>
            Click me!
        </button>
        <input ref={inputRef}/>
        </div>
    );
}

export default UseRefHook;