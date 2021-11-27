import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useLocalStorage } from '../Hooks/useLocalStorage';


const MyContext = createContext();

function MyProvider(props){

    const Pokemons = [
        {
            "number": "25",
            "name": "Pikachu",
            "species": "Mouse",
            "types": [
              "Electric"
            ],
            "abilities": {
              "normal": [
                "Static"
              ],
              "hidden": [
                "Lightning Rod"
              ]
            },
            "eggGroups": [
              "Field",
              "Fairy"
            ],
            "gender": [
              50,
              50
            ],
            "height": "1'04\"",
            "weight": "13.2 lbs.",
            "family": {
              "id": 10,
              "evolutionStage": 2,
              "evolutionLine": [
                "Pichu",
                "Pikachu",
                "Raichu"
              ]
            },
            "starter": false,
            "legendary": false,
            "mythical": false,
            "ultraBeast": false,
            "mega": false,
            "gen": 1,
            "sprite": "https://cdn.traction.one/pokedex/pokemon/25.png",
            "description": "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks."
          },
        
        {
            "number": "4",
            "name": "Charmander",
            "species": "Lizard",
            "types": [
              "Fire"
            ],
            "abilities": {
              "normal": [
                "Blaze"
              ],
              "hidden": [
                "Solar Power"
              ]
            },
            "eggGroups": [
              "Monster",
              "Dragon"
            ],
            "gender": [
              87.5,
              12.5
            ],
            "height": "2'",
            "weight": "18.7 lbs.",
            "family": {
              "id": 2,
              "evolutionStage": 1,
              "evolutionLine": [
                "Charmander",
                "Charmeleon",
                "Charizard"
              ]
            },
            "starter": true,
            "legendary": false,
            "mythical": false,
            "ultraBeast": false,
            "mega": false,
            "gen": 1,
            "sprite": "https://cdn.traction.one/pokedex/pokemon/4.png",
            "description": "If it's healthy, the flame on the tip of its tail will burn vigorously, even if it gets a bit wet."
          },
          {
            "number": "3",
            "name": "Venusaur",
            "species": "Seed",
            "types": [
              "Grass",
              "Poison"
            ],
            "abilities": {
              "normal": [
                "Overgrow"
              ],
              "hidden": [
                "Chlorophyll"
              ]
            },
            "eggGroups": [
              "Monster",
              "Grass"
            ],
            "gender": [
              87.5,
              12.5
            ],
            "height": "6'07\"",
            "weight": "220.5 lbs.",
            "family": {
              "id": 1,
              "evolutionStage": 3,
              "evolutionLine": [
                "Bulbasaur",
                "Ivysaur",
                "Venusaur"
              ]
            },
            "starter": false,
            "legendary": false,
            "mythical": false,
            "ultraBeast": false,
            "mega": false,
            "gen": 1,
            "sprite": "https://cdn.traction.one/pokedex/pokemon/3.png",
            "description": "As it warms itself and absorbs the sunlight, its flower petals release a pleasant fragrance."
          },
    ]


    const [pokemons, setPokemons] = useLocalStorage('pokemons', []);

    const [searchedPokemons, setSearchedPokemons] = useState([]);
    
    useEffect(() => {
        setSearchedPokemons(pokemons);
        console.count();
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
        
        searchedPokemons = found;

    }
    

    return (

        <MyContext.Provider
            value={
                {
                    pokemons,
                    setPokemons,

                    searchPokemons,
                    searchedPokemons,
                    setSearchedPokemons,

                    sortByName,
                    sortById

                }
            }
        
        >
            {props.children}
        </MyContext.Provider>

    );


}


export { MyContext, MyProvider };



