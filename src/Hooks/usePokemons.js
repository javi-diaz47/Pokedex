import { useState } from "react";
import { useEffect } from "react";
import { fetchPokemon } from "./fetchPokemon";
import { useLocalStorage } from './useLocalStorage';


function usePokemons(){

    const {
        loading,
        items: pokemons,
        saveItems: setPokemons,
        clearItems: clearPokemons,
    } = useLocalStorage('pokemons');

    const [searchedPokemons, setSearchedPokemons] = useState(pokemons);

    const [statistic, setStatistic] = useState(pokemons[0]);
    
    useEffect(() => {
        setSearchedPokemons(pokemons);

    }, [pokemons])
    
    const searchPokemons = (value) => {

        let found = pokemons.filter(p => 
            p.name.toLowerCase()
            .includes(value.toLowerCase()
            )
        );

        if(found.length === 0){
            found = pokemons.filter(p => p.id == value);
        }
        
        setSearchedPokemons(found);
 
    }

    const sortByName = () => {
        const found = [...pokemons];
        found.sort((a, b) => 
                        a.name > b.name ? 1 : -1
                        );

        setSearchedPokemons(found);
    }

    const sortById = () => {
        const found = pokemons.sort((a, b) => 
                        a.id > b.id ? 1 : -1
                        );
        
        setSearchedPokemons(found);

    }

    const onCard = (id) => {
        const found = pokemons.filter(p => p.id === id);


        setStatistic(...found);

    }

    const nextPokemon = async (id) => {
        
        let found = pokemons.filter(p => p.id === id);
        
        if(found.length == 0 && id > 0){
            found[0] = await fetchPokemon(id);
            setPokemons(found[0]);
        }

        setStatistic(...found);

    }


    const onCloseCard = () => {
        setStatistic(undefined);
    }

    const clearPokedex = () => {
        localStorage.setItem('pokemons', JSON.stringify([]));
        clearPokemons();
    }

    

    return {
        loading,

        pokemons,
        setPokemons,

        searchPokemons,
        searchedPokemons,
        setSearchedPokemons,

        sortByName,
        sortById,

        onCard,
        onCloseCard,
        statistic,

        nextPokemon,
        clearPokedex

    }
}


export { usePokemons };



