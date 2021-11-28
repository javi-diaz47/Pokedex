import { fetchPokemon } from "./fetchPokemon";

const { useState } = require("react");
const { useEffect } = require("react");

function useLocalStorage(item){

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

       try{

        useEffect(() => {

            let storageItem = JSON.parse(localStorage.getItem(item));
            let parsedItem = [];

            const getPokemon = async () => {
                const pokemon = await fetchPokemon(24);
                saveItems(pokemon);
                setLoading(false);
            }

            if(!storageItem){
                getPokemon();
            }else{
                parsedItem = storageItem;
                setItems(parsedItem);
                setLoading(false);
            }


        }, []);

    }catch(err){
        alert(`So sorry friend but an error has ocurred \nWe encorage you to reload the page`)
    }


    const saveItems = (newItem) => {
        const newItems = [...items];
        newItems.push(newItem);
        localStorage.setItem(item, JSON.stringify(newItems));
        setItems(newItems);
    }


    return {
        items, 
        saveItems,

        loading
    }

}

export { useLocalStorage };

 // const url = 'https://pokeapi.glitch.me/v1/pokemon';

    // const getPokemons = async (id=25) => {

    //     let header = {
    //         "User-Agent": "pokedex (http://localhost:3000/, v0.0.1)" 
    //     }

    //     const response = await fetch(`${url}/${id}`,{
    //         headers: header
    //     });
    //     const pokemon = await response.json();
    //     return pokemon;
    // }

