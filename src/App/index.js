import './App.css';
import { MyProvider } from '../Context';
import { AppUI } from './AppUI';

function App() {

    // const url = 'https://pokeapi.glitch.me/v1/pokemon';

    // const getPokemons = async (id=25) => {

    //     let header = new Headers({
    //         "mode": "no-cors",
    //         // "Access-Control-Allow-Origin": "*",
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //         "User-Agent": "pokedex (http://localhost:3000/, v0.0.1)" 
    //     })

    //     const response = await fetch(`${url}/${id}`,{
    //         headers: header
    //     });
    //     const pokemon = await response.json();
    //     console.log(pokemon);
    //     return pokemon;
    // }

    // getPokemons();
  
  return (

    <MyProvider>

      <AppUI/>

    </MyProvider>

  );
}

export default App;
