import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import { MyContext } from '../../../Context';
import { fetchPokemon } from '../../../Hooks/fetchPokemon';
import { SearchIcon } from '../../atoms/searcheIcon';
import './index.css';

function SearchBar(){

    const [searchValue, setSearchValue] = useState('');

    const {
        searchPokemons,
        setPokemons
    } = useContext(MyContext);


    const onChange = (ev) => {
        setSearchValue(ev.target.value);
        searchPokemons(ev.target.value);
    }

    const onClick = async () => {

        const pokemon = await fetchPokemon(searchValue);

        setPokemons(pokemon);

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