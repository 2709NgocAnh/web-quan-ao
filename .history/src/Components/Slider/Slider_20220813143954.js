import React, { useEffect, useState } from 'react';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

function Slider() {
    const cx = classNames.bind(styles);
    const [slideIndex, setSlideIndex] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    });
    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className={cx('container-slider')}>
            <img width="1100px" height="100px" src={`~/asset/image/slider2.jpeg`} alt={`slider2.jpeg`} />
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
                        <img
                            width="1100px"
                            height="100px"
                            src={process.env.PUBLIC_URL + `~/asset/image/slider${index + 1}.jpeg`}
                            alt={`slider${index + 1}.jpeg`}
                        />
                    </div>
                );
            })}
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} />

            <div className={cx('container-dots')}>
                {Array.from({ length: 3 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? 'dot active' : 'dot'}
                    ></div>
                ))}
            </div>
        </div>
    );
}
export default Slider;
