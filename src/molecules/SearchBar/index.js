import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import { MyContext } from '../../Context';
import './index.css';

function SearchBar(){

    const [searchValue, setSearchValue] = useState('');

    const {
        searchPokemons,
    } = useContext(MyContext);


    const onChange = (ev) => {
        setSearchValue(ev.target.value);
        searchPokemons(ev.target.value);
    }

    return (
        <section className="search-bar">

            <input 
                value={searchValue} 
                onChange={onChange}
                placeholder="Search"
                >
            </input>

        </section>
    );

}

export { SearchBar };