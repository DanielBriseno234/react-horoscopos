import { useState } from 'react';
import Fecha from './components/Fecha';
import Horoscopo from './components/Horoscopo';
import { signosZodiacales } from './data/horoscopo';
import './styles/App.css'; 
import './styles/Card.css' 
import Header from './components/Header';

function App() {
  const [signo, setSigno] = useState(null);

  const calcularSignoZodiacal = (fecha) => {
    const fechaNacimiento = new Date(fecha);
    
    // Encontrar el signo zodiacal basado en la fecha de nacimiento
    const signoEncontrado = signosZodiacales.find(({ inicio, fin }) => {
      const [diaInicio, mesInicio] = inicio.split('/');
      const [diaFin, mesFin] = fin.split('/');
      const fechaInicio = new Date(fechaNacimiento.getFullYear(), mesInicio - 1, diaInicio);
      const fechaFin = new Date(fechaNacimiento.getFullYear(), mesFin - 1, diaFin);
      
      if (mesInicio === '12' && mesFin === '1') {
        fechaFin.setFullYear(fechaNacimiento.getFullYear() + 1); // Caso especial para Capricornio
      }

      return fechaNacimiento >= fechaInicio && fechaNacimiento <= fechaFin;
    });

    setSigno(signoEncontrado);
  };

  return (
    <>
        <Header 
          key={1}
          img={"../public/img/fondo/header.jpg"}
        />
      
      <div className='contenedor'>
        <div className="input-container">
          <Fecha calcularSigno={calcularSignoZodiacal} />
        </div>
        <div className="resultado-container">
          {signo ? 
            ( 
              <Horoscopo signo={signo} /> 
            ) : (
              <div className="card">
                <h1 className="texto-vacio">Selecciona una fecha</h1>
            </div>
            )}
        </div>

      </div>
    </>
    
  );
}

export default App;
