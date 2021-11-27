import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { MyContext } from '../../Context';
import { Icon } from '../Icon';

function PokeballIcon(){

    const {
        defaultSort
    } = useContext(MyContext);

    return (
        
        <Icon 
            className="logo" 
            type="pokeball"
            onClick={defaultSort}
        />

    );

}

export { PokeballIcon };