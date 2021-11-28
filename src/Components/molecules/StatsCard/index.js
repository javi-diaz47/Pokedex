import React from 'react';
import { getColorByType } from '../../Utils/colorByType';
import { getPokemonType } from '../../Utils/getType';
import { StatsAbout } from '../StatsAbout';
import './index.css';

function StatsCard({statistic}){

    return (
        <section className="stats-card">
            <img className="pokemon" src={statistic.sprites.front_default}/>

            <div className="types">
                {   
                    statistic.types.map(type => {

                        const pokemonType = getPokemonType(type);
                        return (
                            <span 
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
            {/* <StatsAbout statistic={statistic}/> */}
        </section>
    );

}

export { StatsCard };