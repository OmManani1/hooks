import React from 'react'
import { useState, useEffect, useRef } from 'react';

export default function UseRefHook() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
        
        
    });

    return (
        <div>
            <h1>useRef Hooks</h1>
            <input 
                type="text" 
                onChange={e=>setInputValue(e.target.value)}
                value={inputValue} 
            /> <br />
            <button >Rendred Count : {count.current} </button>
        </div>
    )
}