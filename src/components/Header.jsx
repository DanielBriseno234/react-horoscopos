import PropTypes from 'prop-types';
import "../styles/Header.css"
const Header = ({img}) => {
  return (
    <>
        {/* <div className="header">
            <img src={img} alt="" className="imagen-header" />
        </div> */}
        <div className="header-titulo">
            <h1>Bienvenidos</h1>
            <h3>Horóscopo <span>React</span></h3>
        </div>

    </>
  )
}

Header.propTypes = {
  img: PropTypes.string,
}


export default Header
