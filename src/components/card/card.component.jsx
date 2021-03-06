import React from 'react';
import "./card.style.css"


export const Card = (props) => 
     (
        <div className='card-container' >
            <img alt='monster' src={ `https://robohash.org/${props.monster.id}?set=set1&size=180x180` } />
            
                <h1>{props.monster.name}</h1>
                <h2>{props.monster.email}</h2>
                <h2>{props.monster.address.city}</h2>
        </div>      
        
    );

    
       
    