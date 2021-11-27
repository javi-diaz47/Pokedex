import React from 'react';
import './index.css';

function Card({id, name, url, types}){

    const typeColor = {
        "rock": '#B69E31',
        "ghost": '#70559B',
        "steel": '#B7B9D0',
        "water": '#6493EB',
        "grass": '#74CB48',
        "psychic": '#FB5584',
        "ice": '#9AD6DF',
        "dark": '#75574C',
        "fairy": '#E69EAC',
        "normal": '#AAA67F',
        "fighting": '#C12239',
        "flying": '#A891EC',
        "poison": '#A43E9E',
        "ground": '#DEC16B',
        "bug": '#A7B723',
        "fire": '#F57D31',
        "electric": '#F9CF30',
        "dragon": '#7037FF',
    }

    const color = typeColor[types[0].toLowerCase()];
    

    // console.log(color)

    return (
    
        <li className="card">
            
            <button 
                className={`card-btn`}
                type={types}
                style={{"borderColor": color}}
            >

                <span 
                    style={
                        {"color": color}
                    }
                >#{id}</span>

                <figure>
                    <img src={url} />
                </figure>
                
                <div 
                    className="name"
                     style={
                        {"backgroundColor": color}
                    }
                >
                    <span>
                        {name}
                    </span>
                </div>

            </button>

        </li>


    );

}

export { Card };