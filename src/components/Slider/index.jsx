import Carousel from 'react-bootstrap/Carousel';
import { config } from '../../config';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${config.api_host}/images/products/bebas ongkir.jpg`}
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${config.api_host}/images/products/transfer-bebas-biaya-admin.jpg`}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;