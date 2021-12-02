import { fetchPokemon } from "./fetchPokemon";
import {useState} from 'react';
import {useEffect} from 'react';


function useLocalStorage(item){

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

       try{

        useEffect(() => {

            let storageItem = JSON.parse(localStorage.getItem(item));
            let parsedItem = [];

            const getPokemon = async () => {
                const pokemon = await fetchPokemon(1);
                saveItems(pokemon);
                setLoading(false);
            }

            if(storageItem === null){
                localStorage.setItem('pokemons', JSON.stringify([]));
            }

            if(storageItem.length == 0){
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

    const clearItems = () => {
        const newItems = [];
        localStorage.setItem(item, JSON.stringify(newItems));
        setItems(newItems);
    }


    return {
        items, 
        saveItems,
        clearItems,
        
        loading,
        setLoading,
    }

}

export { useLocalStorage };
