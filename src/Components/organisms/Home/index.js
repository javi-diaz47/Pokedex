import { Header } from '../../molecules/Header';
import { SearchBar } from '../../molecules/SearchBar';
import './index.css';
import { PokeCards } from '../../molecules/PokeCards';
import { Card } from '../../atoms/Card';
import { MyContext } from '../../../Context';
import { useContext } from 'react';

function Home() {
  
  const {
    loading,

    searchedPokemons,
    setPokemons
  } = useContext(MyContext);

  
  return (

    <div className="App">

      <Header/>

      <SearchBar/>


      <PokeCards>
        {
        !loading && 
        searchedPokemons.length !== 0 && 
        <section className="pokecards">
          <ul>
            {
              searchedPokemons.map(({
                id,
                name,
                types,
                sprites
              }) => (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  types={types}
                  url={sprites.front_default}
                />

              ))
            }
          </ul>
        </section>
        }
      </PokeCards>

    </div>
  );
}

export { Home };
