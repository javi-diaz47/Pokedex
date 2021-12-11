import { Header } from '../molecules/Header';
import { SearchBar } from '../molecules/SearchBar';
import { PokeCards } from '../molecules/PokeCards';
import { Card } from '../atoms/Card';
import { Statistics } from '../organisms/Statistics';
import { usePokemons } from '../../Hooks/usePokemons';
import './index.css';


function App() {
  
  const {
    loading,
    searchPokemons,
    searchedPokemons,
    clearPokedex,
    pokemons,
    setPokemons,
    onCard,
    sortByName,
    sortById,
    stat,
    statistic,
    onCloseCard,
    nextPokemon,
  } = usePokemons();


  return (

    <div className="App">

        <Header 
          sortByName={sortByName}
          sortById={sortById}
        />

        <SearchBar
          loading={loading}
          pokemons={pokemons}
          searchPokemons={searchPokemons}
          setPokemons={setPokemons}
        />


        <PokeCards
          loading={loading}
          searchedPokemons={searchedPokemons}
        >
          {
            pokemon => (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                url={pokemon.sprites.front_default}
                onCard={onCard}
              />
            )
          }
        </PokeCards>


        <div className="clean-pokedex">
          <button className="clean-pokedex-btn"
            onClick={clearPokedex}
          >
            Clear Pokedex
          </button>
        </div>
        
        
        {
          !!statistic &&
          <Statistics
            stat={stat}
            statistic={statistic}
            onCloseCard={onCloseCard}
            nextPokemon={nextPokemon}
          />

        }


    </div>
  );
}

export default App;
