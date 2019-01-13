import React from 'react'
import '../App.css'
import Pokemon from './pokemon'

class Opponents extends React.Component {

    render() {
        const {opponents} = this.props;
        return (
            <div className="container-fluid">
                <div className="row opponent-row">
                    <div className="pull-left square"><a href="#" className="fullLink"></a></div>

                    <div className="pull-left square"><a href="#" className="fullLink"></a></div>
                </div>


                <div className="row opponent-row">
                    <div className="pull-left square"><a href="#" className="fullLink"></a></div>
                    <div className="pull-left square"><a href="#" className="fullLink"></a></div>
                </div>


                <div className="row opponent-row">
                    <div className="pull-left square"><a href="#" className="fullLink"></a></div>
                    <div className="pull-left square"><a href="#" className="fullLink"></a></div>
                </div>


            </div>);
    }
}

export default Opponents;