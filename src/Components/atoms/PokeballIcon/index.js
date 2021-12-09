import React from 'react';
import { Icon } from '../Icon';

function PokeballIcon({defaultSort}){

    return (
        
        <Icon 
            className="logo" 
            type="pokeball"
            onClick={defaultSort}
        />

    );

}

export { PokeballIcon };