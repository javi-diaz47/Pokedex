import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useLocalStorage } from '../Hooks/useLocalStorage';


const MyContext = createContext();

function MyProvider(props){


    const {
        loading,
        items: pokemons,
        saveItems: setPokemons
    } = useLocalStorage('pokemons');

    const [searchedPokemons, setSearchedPokemons] = useState(pokemons);

    const [statistic, setStatistic] = useState(pokemons[0]);
    
    useEffect(() => {
        setSearchedPokemons(pokemons);

    }, [pokemons])
    
    const searchPokemons = (value) => {

        const found = pokemons.filter(p => 
            p.name.toLowerCase()
            .includes(value.toLowerCase())
        );
        
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

    const onCloseCard = () => {
        setStatistic(undefined);
    }

    

    return (

        <MyContext.Provider
            value={
                {
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

                }
            }
        
        >
            {props.children}
        </MyContext.Provider>

    );


}


export { MyContext, MyProvider };



