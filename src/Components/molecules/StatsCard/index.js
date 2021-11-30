import React from 'react';
import { getColorByType } from '../../utils/colorByType';
import { getPokemonType } from '../../utils/getType';
import { BaseStats } from '../BaseStats';
import { StatsAbout } from '../StatsAbout';
import './index.css';

function StatsCard({statistic}){

    return (
        <section className="stats-card">

            <img 
                className="pokemon" 
                // src={statistic.sprites.front_default}
                src={`https://cdn.traction.one/pokedex/pokemon/${statistic.id}.png`}
                alt={`${statistic.name} image`}
            />

            <div className="types">
                {   
                    statistic.types.map(type => {

                        const pokemonType = getPokemonType(type);
                        return (
                            <span
                                key={pokemonType} 
                                className="types"
                                style={{
                                    "backgroundColor": getColorByType(pokemonType)
                                }}
                            >
                                {pokemonType}
                            </span>
                        )
                    })
                }
            </div> 

            <StatsAbout statistic={statistic}/>

            <BaseStats statistic={statistic}/>

        </section>
    );

}

export { StatsCard };