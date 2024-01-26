import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { BiPlayCircle, BiPauseCircle, BiChevronRight } from 'react-icons/bi';
import AClassSedan from '../../../Images/BENZ/A-Class-Sedan/A-Class-SEDAN-Video-use.mp4';

const FirstSlide = () => {
	const [isplay, setIsplay] = useState(true);

	const videoRef = useRef();
	// const containerRef = useRef();

	const handlePlay = () => {
		if (isplay) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
		setIsplay((currentplaying) => !currentplaying);
	};

	useEffect(() => {
		videoRef.current.play();
	}, []);

	return (
		<div className="video-container">
			<video ref={videoRef} muted loop playsInline>
				<source src={AClassSedan} type="video/mp4" />
			</video>

			<div className="btn-container">
				<button className="btn-play   " onClick={handlePlay}>
					{isplay ? <BiPauseCircle /> : <BiPlayCircle />}
				</button>
			</div>
			<div className="description">
				<h3 className="brand-type">A-Class Sedan</h3>
				<p className="chasephrase">The value is in the virtues</p>
			</div>
			<NavLink to="Mercedes/Sedan/A-Class">
				<div className="more-info-container">
					<div className="more-info">Learn More</div>

					<div className="nav-arrow">
						<BiChevronRight />
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default FirstSlide;
