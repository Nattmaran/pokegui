import React from 'react'

const url = 'http://localhost:3001/';

class Pokemon extends React.Component {

    render() {
        const { pokemon } = this.props;
            return (<div>
                <p>English: {pokemon.pokemon.name.english}</p>
                <img src={url+pokemon.sprite}></img>
            </div>);
        }
}

export default Pokemon;