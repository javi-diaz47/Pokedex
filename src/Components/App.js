import { MyProvider } from '../Context';
import { Home } from './organisms/Home';
import { Statistics } from './organisms/Statistics';

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
      
      <Home/>

      <Statistics/>

    </MyProvider>

  );
}

export default App;
