import React from 'react'

class Pokemon extends React.Component {

    render() {
        const { pokemon } = this.props;
        if(pokemon.fetching == "success") {
            return (<div>
                <p>English: {pokemon.pokemon.name.english}</p>
                <p>Japanese: {pokemon.pokemon.name.japanese}</p>
                <p>Chinese: {pokemon.pokemon.name.chinese}</p>
            </div>);
        } else {
            return <p>{pokemon.fetching}</p>;
        }

    }
};

export default Pokemon;