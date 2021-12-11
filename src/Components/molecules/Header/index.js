import React from 'react';
import { PokeballIcon } from '../../atoms/PokeballIcon';
import { SortIcon } from '../../atoms/SortIcon';
import './index.css';

function Header({sortByName, sortById}){

    
    return(
        <header className="header">
            <div className="header-title">
                <PokeballIcon sort={sortById}/>
                <h2>Pokédex</h2>
            </div>
            <div>
                <SortIcon sort={sortByName} type="sortByName"/>
                <SortIcon sort={sortById} type="sortById"/>

            </div>
        </header>
    );

}

export { Header };


