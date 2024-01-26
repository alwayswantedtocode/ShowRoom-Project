import { useState } from 'react';

const useSliderBtn = (data) => {
	//Button Slider
	const [index, setIndex] = useState(0);
	const currentData = data[index];

	const nextHandle = () => {
		const indexSlide = index < data.length - 1 ? index + 1 : data.length - 1;
		setIndex(indexSlide);
	};

	const prevHandle = () => {
		const indexSlide = index > 0 ? index - 1 : 0;
		setIndex(indexSlide);
	};

	const handleSlideCounter = (index) => {
		setIndex(index);
	};

	//Touch Slider
	const gestureSlider = (e) => {
		const touch = e.touches[0];
		let xStart = touch.clientX;
		let yStart = touch.clientY;

		e.target.addEventListener('touchmove', (e) => {
			const touchMove = e.touches[0];
			let xDiff = touchMove.clientX - xStart;
			let yDiff = touchMove.clientY - yStart;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {
				if (xDiff > 0) {
					prevHandle();
				} else {
					nextHandle();
				}
			}
		});

		e.target.addEventListener('touchend', () => {
			e.target.removeEventListener('touchmove', null);
		});
	};

	return { currentData, index, setIndex, nextHandle, prevHandle, handleSlideCounter, gestureSlider };
};

export default useSliderBtn;
