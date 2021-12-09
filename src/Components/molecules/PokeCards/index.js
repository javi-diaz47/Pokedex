import React from 'react';

function PokeCards({loading, searchedPokemons, render, children}){

    const renderFunc = children || render; 

    return (
        <section className="pokecards">

            {
                !loading && 
                searchedPokemons !== undefined &&

                <ul>

                    {searchedPokemons.map(renderFunc)}

                </ul>
            }
        
        </section>    
    
    );

}

export { PokeCards };

