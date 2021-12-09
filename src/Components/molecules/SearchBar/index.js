import React from 'react';
import {useState} from 'react';
import { fetchPokemon } from '../../../Hooks/fetchPokemon';
import { SearchIcon } from '../../atoms/searcheIcon';
import './index.css';

function SearchBar({loading, pokemons, searchPokemons, setPokemons}){

    const [searchValue, setSearchValue] = useState('');

    const onChange = (ev) => {
        setSearchValue(ev.target.value);
        searchPokemons(ev.target.value);
    }

    const onClick = async () => {

        const lowerSearchValue = searchValue.toLowerCase();
        
        const isAlreadyInStorage = pokemons.filter(p => 
            p.name == lowerSearchValue || 
            p.id == searchValue);

        if(isAlreadyInStorage.length === 0){
            const pokemon = await fetchPokemon(lowerSearchValue);
            setPokemons(pokemon);
        }
        
    }


    return (
        <section className="search-bar">

            <input 
                value={searchValue} 
                onChange={onChange}
                placeholder="Search"
            >
            </input>

            <SearchIcon
                onClick={onClick}
            />


        </section>
    );

}

export { SearchBar };