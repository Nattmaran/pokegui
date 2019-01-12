import React from 'react'
import Pokemon from './pokemon'

class PokemonList extends React.Component {

    render() {
        const { pokemonSearch } = this.props;
            if (!pokemonSearch.pokemonList)
                return null;

            return (
                <ul className="pokemonList">
                    {pokemonSearch.pokemonList.map(p =>
                        {
                            return (<Pokemon key={p.id} pokemon={p}/>)
                        }
                    )}
                </ul>);
        }
}

export default PokemonList;