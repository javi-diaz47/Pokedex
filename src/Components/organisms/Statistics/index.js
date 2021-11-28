import React from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { MyContext } from '../../../Context';
import './index.css';
import { getColorByType } from '../../Utils/colorByType';
import  pokeball  from '../../../assets/pokeball-bg.svg';
import { StatsCard } from '../../molecules/StatsCard';
import { getPokemonType } from '../../Utils/getType';
import { Icon } from '../../atoms/Icon';

function Statistics(){

    const {
        statistic,
        onCloseCard
    } = useContext(MyContext);

    const valid = statistic !== undefined ? true: false;

    const onClose = () => {
        onCloseCard();
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
                        <Icon
                            type="close"
                            onClick={onClose}
                        />
                        <figure>
                            <img className="pokeball-bg" src={pokeball} />
                        </figure>
                    </header>

                    <StatsCard statistic={statistic}/>

                </div>

            }
        </>
        ,document.getElementById('statistics')

    );


}

export { Statistics }

