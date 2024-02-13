import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/jugador1.png';
import img2 from '../../assets/jugador2.png';

const images = [img1, img2];

const Jugador = () => {
  return (
    <Carousel interval={2000}> {/* intervalo de cambio en milisegundos */}
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Jugador;
