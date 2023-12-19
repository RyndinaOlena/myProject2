import React from 'react'
import { Carousel } from 'react-bootstrap'
import kitchen from '../photo/kitchen/kitchen-1.jpg'
import couch from '../photo/kitchen/couch.jpg'
import kitchenRoom from '../photo/kitchen/kitchen-2.jpg'
const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item md={{ 'height': '500px' }}>
                <img
                    className="d-block w-100"
                    src={kitchen}
                    alt='First slide' />
                <Carousel.Caption>
                    <h3>Ми втілюємо мрії кожного</h3>
                    <p>Створюємо меблі з індивідуальним підходом </p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item md={{ 'height': '500px' }}>
                <img
                    className="d-block w-100"
                    src={couch}
                    alt='second slide' />
                <Carousel.Caption>
                    <h3>Відкриті до нових ідей</h3>
                    <p>Створюємо персональні інтер'єри</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item md={{ 'height': '500px' }}>
                <img
                    className="d-block w-100"
                    src={kitchenRoom}
                    alt='third slide' />
                <Carousel.Caption>
                    <h3>Ваша уява, наше втілення</h3>
                    <p>Меблі для дому вашої мрії.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
