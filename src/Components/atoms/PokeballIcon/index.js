import React from 'react';
import { Icon } from '../Icon';

function PokeballIcon({sort}){

    return (
        
        <Icon 
            className="logo" 
            type="pokeball"
            onClick={sort}
        />

    );

}

export { PokeballIcon };