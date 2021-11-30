import React from 'react';
import {ReactComponent as SortNumberIcon} from '../../../assets/sort-by-number.svg';
import {ReactComponent as SortNameIcon} from '../../../assets/sort-by-name.svg';
import {ReactComponent as SearchIcon} from '../../../assets/search.svg';
import {ReactComponent as PokeballIcon} from '../../../assets/pokeball.svg';
import {ReactComponent as WeightIcon} from '../../../assets/weight.svg';
import {ReactComponent as HeightIcon} from '../../../assets/height.svg';
import {ReactComponent as CloseIcon} from '../../../assets/arrow-left.svg';
import {ReactComponent as NextPokemonIcon} from '../../../assets/next-pokemon.svg';


function Icon({type, className, onClick}){

    const iconTypes = {
        "sortNumber": (
            <SortNumberIcon/>
        ),
        "sortName": (
            <SortNameIcon/>
        ),
        "pokeball": (
            <PokeballIcon/>
        ),
        "search": (
            <SearchIcon/>
        ),
        "weight": (
            <WeightIcon/>
        ),
        "height": (
            <HeightIcon/>
        ),
        "close": (
            <CloseIcon/>
        ),
        "next-pokemon-icon": (
            <NextPokemonIcon/>
        ),

    }
    

    return (
        <button 
            className={className}
            onClick={onClick}   
        >
            {iconTypes[type]}
        </button>
    );


}


export { Icon };