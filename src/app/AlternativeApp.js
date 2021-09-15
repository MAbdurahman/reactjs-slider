import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import data from './../data';

export default function AlternativeApp() {
	//**************** variables ****************//
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	//**************** functions ****************//
	const nextSlide = () => {
		setIndex(oldIndex => {
			let index = oldIndex + 1;
			if (index > people.length - 1) {
				index = 0;
			}
			return index;
		});
	};
	const prevSlide = () => {
		setIndex(oldIndex => {
			let index = oldIndex - 1;
			if (index < 0) {
				index = people.length - 1;
			}
			return index;
		});
	};
	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(oldIndex => {
				let index = oldIndex + 1;
				if (index > people.length - 1) {
					index = 0;
				}
				return index;
			});
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);
	return (
		<section className='section'>
			<div className='title'>
				<h2>testimonials</h2>
			</div>
			<div className='section-center'>
				{people.map((person, personIndex) => {
					const { id, image, name, quote, title } = person;

					let position = 'nextSlide';
					if (personIndex === index) {
						position = 'activeSlide';
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = 'lastSlide';
					}
					return (
						<article className={position} key={id}>
							<img className='person-img' src={image} alt={name} />
							<h4>{name}</h4>
							<h5>{title}</h5>
							<div className='image-caption'>
								<p className='text'>
									<FaQuoteLeft className='icon' /> {quote}
									<FaQuoteRight className='icon' />
								</p>
							</div>
						</article>
					);
				})}
				<button className='prev' onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</button>
				<button className='next' onClick={() => setIndex(index + 1)}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}
