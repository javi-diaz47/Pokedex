import React from 'react';
import { PokeballIcon } from '../../atoms/PokeballIcon';
import { SortIcon } from '../../atoms/SortIcon';
import './index.css';

function Header({sortByName}){

    
    return(
        <header className="header">
            <div className="header-title">
                <PokeballIcon/>
                <h2>Pokédex</h2>
            </div>
            <SortIcon sort={sortByName}/>
        </header>
    );

}

export { Header };


