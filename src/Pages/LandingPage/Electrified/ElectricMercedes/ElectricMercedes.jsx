import React, { useRef } from 'react';
import data from './Data';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import './ElectricMercedes.css';
import useSliderBtn from '../../../../Custom Hooks/useSliderBtn';

const ElectricMercedes = () => {
	const { index, nextHandle, prevHandle, handleSlideCounter, gestureSlider } = useSliderBtn(data);

	// Access the image slide DOM
	const mercedesSlideRef = useRef();
	let electricMercedesSlide = mercedesSlideRef.current?.clientWidth;

	// Access the details slide DOM
	const mercedesDetailsRef = useRef();
	let mercedesDetailSlide = mercedesDetailsRef.current?.clientWidth;

	return (
		// Go green image slider
		<div className="M-Green-container">
			<div className="M-Green-slide-container" onTouchStart={gestureSlider}>
				{data.map((mercedes, Index) => {
					const { image, name, id } = mercedes;
					return (
						<div
							className="M-Green-slider-frame"
							key={id}
							style={{
								transform: 'translateX(-' + electricMercedesSlide * index + 'px',
							}}
							ref={mercedesSlideRef}
							//touch slide
						>
							<img
								src={image}
								alt={name}
								style={{ left: Index * 100 + '%' }}
								className={Index === index ? 'active' : ''}
							/>
						</div>
					);
				})}
			</div>

			{/* Buttons */}
			<div className="M-Green-btn-container">
				<button className="M-left-click" onClick={prevHandle}>
					<BiChevronLeftCircle style={{ color: 'black' }} />
				</button>
				<button className="M-right-click" onClick={nextHandle}>
					<BiChevronRightCircle style={{ color: 'black' }} />
				</button>
			</div>

			{/* Go green details slider */}

			<div className="M-Green-details-container">
				{data.map((detail, Index) => {
					const { id, heading, desc } = detail;
					return (
						<div
							className="M-Green-details-slide"
							key={id}
							style={{
								transform: 'translateX(-' + mercedesDetailSlide * index + 'px',
							}}
							ref={mercedesDetailsRef}
							//touch slide
						>
							<div
								className={`M-Green-details ${Index === index ? 'active' : ''}`}
								style={{ left: Index * 100 + '%' }}
							>
								<h4>{heading}</h4>
								<p>{desc}</p>
							</div>
						</div>
					);
				})}
			</div>

			{/* Slider indicator */}

			<div className="M-green-count-container">
				{data.map((indicator, Index) => {
					const { id } = indicator;
					return (
						<div
							className={`M-green-count ${Index === index ? 'active' : ''}`}
							key={id}
							onClick={() => handleSlideCounter(Index)}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default ElectricMercedes;
