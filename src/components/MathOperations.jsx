import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const MathOperations= ({onClickOperations, onClickEqual}) => (
    /*colocamos 5 componentes Button donde le añadimos
    un texto y una función a cada uno*/
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperations} />
        <Button text="-" clickHandler={onClickOperations} />
        <Button text="*" clickHandler={onClickOperations} />
        <Button text="/" clickHandler={onClickOperations} />
        <Button text="=" clickHandler={onClickEqual} ></Button>
     </section>
);
   
    
    MathOperations.propTypes = {
        onClickOperations: PropTypes.func.isRequired,
        onClickEqual: PropTypes.func.isRequired
    }


export default MathOperations 