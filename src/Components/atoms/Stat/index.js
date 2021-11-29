import React from 'react';
import './index.css';

function Stat({name, value, color}){

    const statName = {
        "hp": "hp",
        "attack": "att",
        "defense": "def",
        "special-attack": "satk",
        "special-defense": "sdef",
        "speed": "spd",

    }

    return (
        <article className="base-stat">
            <h2 style={{"color": color}}
            >{statName[name]}</h2>
            <span>{value}</span>
            <div className="bar-wrapper">
                <div className="bar"
                    style={{"backgroundColor": color}}
                >
                </div>
                <div className="completed-bar"
                    style={{
                        "width": `${value/2}%`,
                        "backgroundColor": color
                    }}
                ></div>
            </div>
        </article>

    );

}

export { Stat };