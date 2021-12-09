import React from 'react';
import ReactDOM from 'react-dom';
import { getColorByType } from '../../utils/colorByType';
import { StatsCard } from '../../molecules/StatsCard';
import { getPokemonType } from '../../utils/getType';
import { StatsHeader } from '../../molecules/StatsHeader';
import './index.css';

function Statistics({statistic, onCloseCard, nextPokemon}){
    
    const onClose = () => {
        onCloseCard();
    }

    const onNextPokemon = () => {
        nextPokemon(statistic.id + 1);
    }

    const onBeforePokemon = () => {
        nextPokemon(statistic.id - 1);
    }

    return ReactDOM.createPortal(
        
        <div 
            className="statistics" 
            stats={'true'}
            style={{
                "backgroundColor": getColorByType( getPokemonType(statistic.types[0]) )
            }}
        >
            
            <StatsHeader 
                id={statistic.id}
                name={statistic.name}
                onClose={onClose}
                onBeforePokemon={onBeforePokemon}
                onNextPokemon={onNextPokemon}
            />

            <StatsCard statistic={statistic}/>

        </div>

        ,document.getElementById('statistics')

    );


}

export { Statistics }

