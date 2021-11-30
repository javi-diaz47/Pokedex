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
        pokemons,
        searchPokemons,
        setPokemons
    } = useContext(MyContext);


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
            console.log('Fetching');
        }else{
            console.log('Not fetching')
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