import React from 'react';
import { Field, reduxForm } from 'redux-form'

let PokeForm = props => {
    const { handleSubmit } = props;
    return (<form onSubmit={handleSubmit}>
        <div className="form-group row">
            <div className="col-sm-10">
                <Field name="pokemonname" component="input" type="text" className="form-control" id="pokemonname" placeholder="Pokemon..." />
                <button type="submit" className="btn btn-block btn-primary">Submit</button>
            </div>
        </div>
    </form>);
};

PokeForm = reduxForm({form: 'pokemon',})(PokeForm);

export default PokeForm;
