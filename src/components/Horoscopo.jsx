import PropTypes from 'prop-types';
import '../styles/Horoscopo.css';
import '../styles/Card.css'; 

const Horoscopo = ({ signo }) => {
    const { nombre, rango, descripcion, imagen } = signo;
  
    return (
        <div className="card">
            <h2 className='titulo-signo'>{nombre}</h2>
            <div className="imagen-signo">
                <img src={`img/horoscopos/${imagen}.png`} alt={nombre} />
            </div>
            <div className="info-signo">
                <p className='fecha-signo'>{rango}</p>
                <p className='descripcion-signo'>{descripcion}</p>
            </div>
        </div>
    );
};

Horoscopo.propTypes = {
    signo: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        rango: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
    }).isRequired,
};

export default Horoscopo;
