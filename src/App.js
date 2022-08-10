/** @format */

import logo from './logo.svg';
import './App.css';
import Propiedades from './components/Propiedades';
import Componente from './components/Componente';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Eventos from './components/Eventos';
import ComunicacionComponent from './components/ComunicacionComponent';

function App() {
  let nombre = 'Rodrigo';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{nombre}</h1>
        for
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Propiedades
          cadena="esto es una cadena"
          numero={19}
          booleano={false}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: 'Rodrig', apellido: 'Alegre' }}
          elementoReact={<i>esto es un elementoReact</i>} //Elemento i de React
          funcion={(num) => num * 2}
          componente={
            <Componente msg="Hola soy un componente pasado compo props" />
          }
        />

        <hr></hr>
        <Estado> </Estado>
        <hr></hr>
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr></hr>
        <Eventos />
        <hr></hr>
        <ComunicacionComponent />
      </section>
    </div>
  );
}

export default App;
