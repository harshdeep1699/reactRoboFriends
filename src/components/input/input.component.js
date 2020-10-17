import React from 'react';
import './input.styles.css';
export const InputField = (props)=>{
    return (
        <div>
                <input className='search' type="search" placeholder={props.placeholder}
                onChange={props.handleEvent}></input>
        </div>
    )
}