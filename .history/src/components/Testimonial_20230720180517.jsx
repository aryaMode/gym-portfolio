import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";

const Testimonial = () => {
	const [index, setIndex] = useState(0);
	const { name, quote, job, avatar } = testimonials[index];

	const handlePreviousTestimonial = () => {
		setIndex((prevValue) => {
			return prevValue - 1;
		});
		if (index <= 0) {
			setIndex(testimonials.length - 1);
		}
	};
	const handleAfterTestimonial = () => {
		setIndex((prevValue) => {
			return prevValue + 1;
		});
		if (index >= testimonials.length - 1) {
			setIndex(0);
		}
	};

	return (
		<section className="testimonials">
			<div className="container testimonial__container">
				<SectionHead
					icon={<ImQuotesLeft />}
					title="Testimonials"
					className="testimonials__head"
				/>
				<Card className="testimonial">
					<div className="testimonial__avatar">
						<img src="https://lh3.googleusercontent.com/a-/AD_cMMRPVS1Nt5x3tYa7Uw85zYXNkXppoY2rwZElyNpjOOF1Nw=w120-h120-p-rp-mo-br100" alt={name} />
					</div>
					<p className="testimonial__quote">{`"${quote}"`}</p>
					<h5>{name}</h5>
					<small className="testimonial__title">{job}</small>
				</Card>
				<div className="testimonial__btn-container">
					<button
						className="testimonials__btn"
						onClick={handlePreviousTestimonial}
					>
						<IoIosArrowDropleftCircle />
					</button>
					<button
						className="testimonials__btn"
						onClick={handleAfterTestimonial}
					>
						<IoIosArrowDroprightCircle />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
