import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4>Welcome to The World Fitness Zone, Karnal!</h4>
					<h1>Unleash Your Potential with The World Fitness Zone

</h1>
					<p>
					Are you ready to take your fitness journey to the next level? Look no further than The World Fitness Zone - Karnal's premier fitness destination. We are not just a gym; we are a community of fitness enthusiasts who believe in the power of transformation and the pursuit of a healthier, fitter lifestyle.
					</p>
					<Link to="/plans" className="btn lg">
						Get Started
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
