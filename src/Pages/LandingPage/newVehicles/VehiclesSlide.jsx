import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import data from './vehiclesData';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';
import useSliderBtn from '../../../Custom Hooks/useSliderBtn';

const VehiclesSlide = () => {
	const { index, nextHandle, prevHandle, handleSlideCounter, gestureSlider } = useSliderBtn(data);

	const vechicleRef = useRef();
	let vehicleSlidewidth = vechicleRef.current?.clientWidth;

	const colorRef = useRef();

	return (
		<section className="second-Section">
			<h2 className="new-vehicle-heading">New Vehicles</h2>

			<div
				className="new-vechicle-slide-container"
				style={{
					transform: 'translateX(-' + vehicleSlidewidth * index + 'px',
				}}
				onTouchStart={gestureSlider}
			>
				{data.map((carslides, carIndex) => {
					const { id, image, Brand, Type, Year, link, amount } = carslides;

					//create active slide

					return (
						<div
							className={`vehicle-slide ${carIndex === index ? 'active' : ''}`}
							key={id}
							ref={vechicleRef}
						>
							<div className="vehicleImage">
								<NavLink to={link} key={link}>
									<img src={image} alt={Brand} />
								</NavLink>
							</div>
							<div className="new-vehicle-details">
								<div className="year-type-cover">
									<div className="year">
										<h5>{Year}</h5>
									</div>

									<h5 className="line">|</h5>

									<div className="type">
										<h5>{Type}</h5>
									</div>
								</div>
								<div className="brand-features-amount-cover">
									<div className="brand">
										<h4>{Brand}</h4>
									</div>
									<div className="features">
										<h5>features</h5>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illo autem
											quis minima dignissimos dolorem corrupti sed nisi necessitatibus commodi,
											quidem ipsum iure nam modi ducimus eveniet. Necessitatibus, adipisci
											commodi.
										</p>
									</div>
									<div className="amount-explore-cover">
										<div className="amount">${amount}</div>
										<h5 className="line-two">|</h5>
										<NavLink to={link}>
											{' '}
											<button className="explore-btn">explore</button>
										</NavLink>

										{/* </div> */}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="slide-counter-container">
				<div className="sec-two-prev-btn" onClick={prevHandle}>
					<BiCaretLeft />
				</div>
				<div className="counter">
					{data.map((counter, countIndex) => {
						const { id } = counter;

						return (
							<div
								className={`slide-counter ${countIndex === index ? 'active' : ''}`}
								key={id}
								ref={colorRef}
								onClick={() => handleSlideCounter(countIndex)}
							></div>
						);
					})}
				</div>
				<div className="sec-two-next-btn" onClick={nextHandle}>
					<BiCaretRight />
				</div>
			</div>
		</section>
	);
};

export default VehiclesSlide;
