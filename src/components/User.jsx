
import { Carousel, Container } from 'react-bootstrap'
import blackKitch from '../photo/works/blackKitchen.jpg'
import broukKitch from '../photo/works/brounKitchen.jpg'
import closet from '../photo/works/closet.jpg'
import grinKitch from '../photo/works/grinKitchen.jpg'
import kitchen from '../photo/works/kitchen.jpg'
import redKitch from '../photo/works/redKitchen.jpg'
import rivera from '../photo/works/rivera.jpg'
import tv from '../photo/works/tv.jpg'
import whiteKitch from '../photo/works/whiteKitchen.jpg'


const Photo = () => {

    return (

        <Container style={{ minHeight: "400px", maxWidth: '700px', marginBottom: '20px', marginTop: '20px' }} >
            <Carousel md={{ width: '700px', margin: '0 auto', marginBottom: '50px', marginTop: '50px' }}>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img style={{
                        minHeight: "450px",
                        maxHeight: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                        className="d-block w-100 h-300px"
                        src={blackKitch}
                        alt='First slide'

                    />
                    <Carousel.Caption>
                        <h3>Меблі виготовлені з любов'ю</h3>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            minHeight: "450px",
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={broukKitch}
                        alt='second slide' />
                    <Carousel.Caption>
                        <h3>Меблі виготовлені з любов'ю</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            minHeight: "450px",
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={closet}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Меблі виготовлені з любов'ю</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            minHeight: "450px",
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={grinKitch}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Меблі виготовлені з любов'ю</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            minHeight: "450px",
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100"
                        src={kitchen}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Меблі виготовлені з любов'ю</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            minHeight: "450px",
                            maxHeight: '500px',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={redKitch}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Меблі виготовлені з любов'ю</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            minHeight: "450px",
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={rivera}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Меблі виготовлені з любов'ю</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            minHeight: "450px",
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={tv}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Меблі виготовлені з любов'ю</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            minHeight: "450px",
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={whiteKitch}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Меблі виготовлені з любов'ю</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Photo
