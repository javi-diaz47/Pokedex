const url = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemon(exp){
    //url: url of the API
    //exp:: what we want to request

    const res = await fetch(`${url}/${exp}`);

    const data = await res.json();

    return data;

}


export { fetchPokemon };