import axios from 'axios'
import React, {useEffect, useState} from 'react'

const AxiosPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [load,setLoad] = useState(false);
    const osama = () => {
        setLoad(true);
    }
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {setPokemon(response.data.results);console.log(response)})
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
    )
}

export default AxiosPokemon
