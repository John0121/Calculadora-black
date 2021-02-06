// esto es un componente con react.

// importación
import React from 'react';
import Button from './components/button';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';

// generación de la función del componente
//función flecha o arrow function
const App = () => {

    const clickHandlerFuction = (text) => {
        console.log ("Button.clickHandler1", text);
    }
    // lo que ejecuta la función
    console.log("renderización de App");
    return (
        <main className='react-calculator'>
            <Result value={undefined} />
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFuction}/>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>
                Clear
            </button>
            <button>
                R
            </button>
        </div>
        <MathOperations 
            onClickOperations={operation =>
                console.log("Operation:", operation)
            }
            onClickEqual={equal =>
                console.log("Equal:", equal)
            }
        />

    </main>)
}


// exportación
export default App
