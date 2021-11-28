import React from 'react';
import { PokeballIcon } from '../../atoms/PokeballIcon';
import { SortNameIcon } from '../../atoms/SortNameIcon';
import './index.css';

function Header(){

    
    return(
        <header className="header">
            <div className="header-title">
                <PokeballIcon/>
                <h2>Pokédex</h2>
            </div>
            <SortNameIcon/>
        </header>
    );

}

export { Header };


