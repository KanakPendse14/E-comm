import { Carousel, } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
            <img
            crossOrigin="anonymous"
            className="d-block w-100"
            style={{height: "300px"}}
            src="/images/carousel/carousel-1.png"
            alt="First slide"
            />
            <Carousel.Caption>
                <LinkContainer style={{"cursor": "pointer"}} to="/product-details">
                <h3>Bestseller in Laptops</h3>
                </LinkContainer>  
            <p>Dell inspiron 14 5430 13th Gen Intel(R) i7</p>
            </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{height: "300px"}}
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
        />
           <Carousel.Caption>
                <LinkContainer style={{"cursor": "pointer"}} to="/product-details">
                <h3>Bestseller in Books</h3>
                </LinkContainer>  
            <p>Explore the world written by Enid Blytton</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{height: "300px"}}
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
        />
            <Carousel.Caption>
                <LinkContainer style={{"cursor": "pointer"}} to="/product-details">
                <h3>Bestseller in Cameras</h3>
                </LinkContainer>  
            <p>Sony Alpha 7 III, for capturing memories</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default ProductCarouselComponent;