import React from 'react';
import './card.style.css'
export const Card = (props)=>{
    return (
        <div className='card-container'>
            <img src={`http://robohash.org/${props.monster.id}/?set=set2`}></img>
            <h1 key={props.id}>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    )

}