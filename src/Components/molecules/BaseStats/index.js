import React from 'react';
import { Stat } from '../../atoms/Stat';
import { getColorByType } from '../../utils/colorByType';
import { getPokemonType } from '../../utils/getType';


function BaseStats({statistic}){

    const color = getColorByType(getPokemonType(statistic.types[0]));

    return (

        <div className="base-stats">
            <h2
                className="title"
                style={{"color": color}} 
            >Base Stats</h2>
            {

                statistic.stats.map(stat => (
                    
                    <Stat 
                        key={stat.stat.name}
                        name={stat.stat.name}
                        value={stat.base_stat}
                        color={color}
                    />
                
                ))

            }
        </div>

    );

}

export { BaseStats };