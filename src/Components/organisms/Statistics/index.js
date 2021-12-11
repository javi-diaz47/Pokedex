import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { getColorByType } from '../../utils/colorByType';
import { StatsCard } from '../../molecules/StatsCard';
import { getPokemonType } from '../../utils/getType';
import { StatsHeader } from '../../molecules/StatsHeader';
import './index.css';
import { useEffect } from 'react/cjs/react.development';

function Statistics({statistic, stat, onCloseCard, nextPokemon}){
    
    useEffect(() => {
        
        onStats(stat)

    }, [stat])

    const onStats = (bool) => {
        document.getElementById('statistics').setAttribute('open', bool);
    }

    const onNextPokemon = () => {
        nextPokemon(statistic.id + 1);
    }

    const onBeforePokemon = () => {
        if(statistic.id - 1 == 0) {
            onCloseCard();
        }else{
            nextPokemon(statistic.id - 1);
        }
    }


    return ReactDOM.createPortal(
        
        <div 
            className="statistics" 
            style={{
                "backgroundColor": getColorByType( getPokemonType(statistic.types[0]) )
            }}
        >
            
            <StatsHeader 
                id={statistic.id}
                name={statistic.name}
                onClose={onCloseCard}
                onBeforePokemon={onBeforePokemon}
                onNextPokemon={onNextPokemon}
            />

            <StatsCard statistic={statistic}/>

        </div>

        , document.getElementById('statistics')

    );


}

export { Statistics }

