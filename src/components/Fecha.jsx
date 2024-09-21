import PropTypes from 'prop-types';
import '../styles/Fecha.css';
import '../styles/Card.css'; 
import { useState } from 'react';

const Fecha = ({ calcularSigno }) => {
  const [fecha, setFecha] = useState('');

  const manejarCambio = (e) => {
    setFecha(e.target.value);
  };

  const manejarConsulta = () => {
    calcularSigno(fecha);
  };

  return (
    <div className="card">
      <h3>Ingrese su fecha de nacimiento:</h3>
      <input className="input-fecha" type="date" onChange={manejarCambio} />
      <button className="btn-fecha" onClick={manejarConsulta}>Consultar</button>
    </div>
  );
};

Fecha.propTypes = {
  calcularSigno: PropTypes.func.isRequired,
};

export default Fecha;
