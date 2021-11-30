import React from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { MyContext } from '../../../Context';
import './index.css';
import { getColorByType } from '../../utils/colorByType';
import  pokeball  from '../../../assets/pokeball-bg.svg';
import { StatsCard } from '../../molecules/StatsCard';
import { getPokemonType } from '../../utils/getType';
import { Icon } from '../../atoms/Icon';
import { Stat } from '../../atoms/Stat';

function Statistics(){

    const {
        statistic,
        onCloseCard,
        nextPokemon
    } = useContext(MyContext);

    const valid = statistic !== undefined ? true: false;

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
        <>
            {
                !!valid &&
                <div 
                    className="statistics" 
                    stats={`${valid}`}
                    style={{
                        "backgroundColor": getColorByType( getPokemonType(statistic.types[0]) )
                    }}
                    >
                    <header>
                        <div className="wrapper">
                            <Icon
                                className="close-icon"
                                type="close"
                                onClick={onClose}
                            />
                            <h2>{statistic.name}</h2>
                            <span>{`#${statistic.id}`}</span>
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

                    <StatsCard statistic={statistic}/>

                </div>

            }
        </>
        ,document.getElementById('statistics')

    );


}

export { Statistics }

