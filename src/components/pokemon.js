import React from 'react'

const url = 'http://localhost:3001/';

class Pokemon extends React.Component {

    render() {
        const { pokemon } = this.props;
        if (pokemon === undefined) {
            return;
        }
        return (<div>
                <img src={url+pokemon.sprite}></img>
                <p className="pull-left">{pokemon.pokemon.name.english}</p>
            </div>);
        }
}

export default Pokemon;