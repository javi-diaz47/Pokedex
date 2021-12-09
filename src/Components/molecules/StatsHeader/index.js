import React from 'react';
import { Icon } from '../../atoms/Icon';
import  pokeball  from '../../../assets/pokeball-bg.svg';

function StatsHeader({
        id, 
        name, 
        onClose, 
        onBeforePokemon, 
        onNextPokemon
    }){

    return (
        <header>
            <div className="wrapper">
                <Icon
                    className="close-icon"
                    type="close"
                    onClick={onClose}
                />
                <h2>{name}</h2>
                <span>{`#${id}`}</span>
            </div>
            <figure>
                <img 
                    className="pokeball-bg" 
                    src={pokeball} 
                    alt="pokeball"
                />
            </figure>
            <nav className="next-pokemon">
                <Icon
                    className="before-pokemon-icon"
                    type="next-pokemon-icon"
                    onClick={onBeforePokemon}
                />

                <Icon
                    className="next-pokemon-icon"
                    type="next-pokemon-icon"
                    onClick={onNextPokemon}
                />
            </nav>
        </header>
    );
    
}

export { StatsHeader };