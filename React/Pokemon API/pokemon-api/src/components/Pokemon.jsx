import React, {useState, useEffect} from 'react'


const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [load,setLoad] = useState(false);
    const osama = () => {
        setLoad(true);
    }
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemon(response.results))

    }, []);
 
    return (
        <>
        <button onClick={osama}>Fetch Pokemon</button>
        <div>{
            load ?
            pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            }) : ''}
        </div>
        </>
    );
}

export default Pokemon