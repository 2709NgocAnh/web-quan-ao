import './Slider.module.scss';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    return (
        <button onClick={moveSlide} className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
            <img
                src={direction === 'next' ? rightArrow : leftArrow}
                alt={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
            />
        </button>
    );
}
export default BtnSlider;
