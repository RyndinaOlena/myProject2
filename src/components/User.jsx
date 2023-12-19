
import { Carousel, Container } from 'react-bootstrap'
import blackKitch from '../photo/works/blackKitchen.png'
import broukKitch from '../photo/works/brounKitchen.png'
import closet from '../photo/works/closet.png'
import grinKitch from '../photo/works/grinKitchen.png'
import kitchen from '../photo/works/kitchen.png'
import redKitch from '../photo/works/redKitchen.png'
import rivera from '../photo/works/rivera.png'
import tv from '../photo/works/tv.png'
import whiteKitch from '../photo/works/whiteKitchen.png'


const Photo = () => {

    return (

        <Container >
            <Carousel style={{ width: '800px', margin: '0 auto', marginBottom: '50px', marginTop: '50px' }}>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img style={{
                        maxHeight: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                        className="d-block w-100 h-300px"
                        src={blackKitch}
                        alt='First slide' />
                    <Carousel.Caption>
                        <h3>Ми втілюємо мрії кожного</h3>
                        <p>Створюємо меблі з індивідуальним підходом </p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={broukKitch}
                        alt='second slide' />
                    <Carousel.Caption>
                        <h3>Відкриті до нових ідей</h3>
                        <p>Створюємо персональні інтер'єри</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={closet}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Ваша уява, наше втілення</h3>
                        <p>Меблі для дому вашої мрії.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={grinKitch}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Ваша уява, наше втілення</h3>
                        <p>Меблі для дому вашої мрії.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100"
                        src={kitchen}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Ваша уява, наше втілення</h3>
                        <p>Меблі для дому вашої мрії.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={redKitch}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Ваша уява, наше втілення</h3>
                        <p>Меблі для дому вашої мрії.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={rivera}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Ваша уява, наше втілення</h3>
                        <p>Меблі для дому вашої мрії.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={tv}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Ваша уява, наше втілення</h3>
                        <p>Меблі для дому вашої мрії.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item md={{ 'height': '100px' }}>
                    <img
                        style={{
                            maxHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                        className="d-block w-100 h-300px"
                        src={whiteKitch}
                        alt='third slide' />
                    <Carousel.Caption>
                        <h3>Ваша уява, наше втілення</h3>
                        <p>Меблі для дому вашої мрії.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Photo
