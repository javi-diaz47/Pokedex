import { Header } from '../molecules/Header';
import { SearchBar } from '../molecules/SearchBar';
import './App.css';
import { PokeCards } from '../molecules/PokeCards';
import { Card } from '../atoms/Card';
import { MyContext } from '../Context';
import { useContext } from 'react';

function AppUI() {
  
  const {
    searchedPokemons,
    setPokemons
  } = useContext(MyContext);

  return (

    <div className="App">

      <Header/>

      <SearchBar/>

      <PokeCards>
        <section className="pokecards">
          <ul>
            {
              searchedPokemons.map(({
                number,
                name,
                sprite,
                types
              }) => (
                <Card
                  key={number}
                  id={number}
                  name={name}
                  url={sprite}
                  types={types}
                />

              ))
            }
          </ul>
        </section>
      </PokeCards>

    </div>
  );
}

export { AppUI };
