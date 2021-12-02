import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../../../Context';
import { getColorByType } from '../../utils/colorByType';
import { getPokemonType } from '../../utils/getType';
import './index.css';

function Card({id, name, types}){

    const {
        onCard
    } = useContext(MyContext);

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
                    <img 
                        src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
                        alt={`${name} image`}
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