const url = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemon(exp){

    const res = await fetch(`${url}/${exp}`);

    const data = await res.json();

    return data;

}


export { fetchPokemon };