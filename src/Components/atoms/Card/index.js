import React from 'react';
import { getColorByType } from '../../utils/colorByType';
import { getPokemonType } from '../../utils/getType';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './index.css';

function Card({id, name, types, onCard}){

    const onClick = () => {
        onCard(id);
    }

    const color = getColorByType( getPokemonType(types[0]) );

    return (
    
        <li className="card">
            
            <button 
                className={`card-btn`}
                type={types}
                onClick={onClick}
                style={{"borderColor": color}}
            >

                <span 
                    style={
                        {"color": color}
                    }
                >
                    #{id}
                </span>

                <figure>
                    <LazyLoadImage 
                        src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
                        alt={`${name}`}
                    />
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