const { useState } = require("react");
const { useEffect } = require("react/cjs/react.development");

function useLocalStorage(item, initValue){


    const [items, setItems] = useState(initValue);

       try{

        useEffect(() => {

            let storageItem = JSON.parse(localStorage.getItem(item));
            let parsedItem;

            if(!storageItem){
                localStorage.setItem(item, JSON.stringify(initValue));
                parsedItem = initValue;
            }else{
                parsedItem = storageItem;
            }

            setItems(parsedItem);

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


    return [
            items, 
            saveItems,
        ];


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

