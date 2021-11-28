import React from 'react';
import { Characteristic } from '../../atoms/Characteristic';
import { getColorByType } from '../../Utils/colorByType';
import { getPokemonType } from '../../Utils/getType';
import './index.css';

function StatsAbout({statistic}){
    console.log(statistic)
    return (
        <div className="about">
            <h2
                style={{
                    "color": getColorByType( getPokemonType(statistic.types[0]))
                }}

            >
                About
            </h2>
            <Characteristic
                className="weight"
                name="weight"
                value={`${(statistic.weight/2.2).toFixed(1)} kg`}
            />


            <Characteristic
                className="height"
                name="height"
                value={`${(statistic.height/10).toFixed(1)} m`}
            />
            <p className="desc">
                Debes escribir una descripcion javi
                {/* { console.log(statistic) } */}
            </p>
        </div>

    );

}

export { StatsAbout };