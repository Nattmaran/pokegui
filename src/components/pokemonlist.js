import React from 'react'
import Pokemon from './pokemon'

class PokemonList extends React.Component {

    render() {
        const { pokemonSearch } = this.props;
            if (!pokemonSearch.pokemonList)
                return null;

            return (
                <ul className="list-group">
                    {pokemonSearch.pokemonList.map(p =>
                        {
                            return (<button onClick={() => this.props.addToOpponents(p)} className="list-group-item list-group-item-action"><Pokemon key={p.id} pokemon={p}/></button>)
                        }
                    )}
                </ul>);
        }
}

export default PokemonList;