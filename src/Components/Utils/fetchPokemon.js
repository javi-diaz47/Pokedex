const url = 'https://pokeapi.co/api/v2/ability'

const fetchPokemon = async(exp) => {
    
    const res = await fetch(`${url}/${exp}`);
    
    const pokemon = await res.json();

    console.count();

    return pokemon;

}

export { fetchPokemon };