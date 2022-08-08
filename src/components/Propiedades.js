import React from 'react';
import PropTypes from 'prop-types';
export const Propiedades = (props) => {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? 'verdadero' : 'falso'}</li>
        <li>{props.arreglo.join('-')}</li>
        <li>{props.objeto.nombre + ' ' + props.objeto.apellido}</li>
        <li>
          <h3>{props.elementoReact}</h3>
        </li>
        <li>{props.arreglo.map(props.funcion).join(',')}</li>
      </ul>
    </div>
  );
};

Propiedades.defaultProps = {
  porDefecto: 'Las props',
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
export default Propiedades;
