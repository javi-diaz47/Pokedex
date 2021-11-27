import React from 'react';
import {ReactComponent as SortNumberIcon} from '../../style/assets/sort-by-number.svg';
import {ReactComponent as SortNameIcon} from '../../style/assets/sort-by-name.svg';
import {ReactComponent as PokeballIcon} from '../../style/assets/pokeball.svg';


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
        )
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