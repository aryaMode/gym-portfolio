import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
	return (
		<>
			<Header title="About us" image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores
				doloribus, eligendi incidunt modi rerum debitis consequatur molestias?
			</Header>
			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="OurStoryImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
							fugit ad neque quo, quas eius quam at sunt quod in atque nulla
							minus nam impedit tempore consectetur esse quibusdam voluptatum
							optio nemo! Aperiam veritatis delectus commodi. Minima tempora
							voluptates natus.
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Laboriosam harum corrupti quas voluptate, perferendis consectetur
							veritatis veniam, ratione, distinctio iste dignissimos alias ipsum
							minima consequuntur?
						</p>
						<p>
							Perferendis consectetur veritatis veniam, ratione, distinctio iste
							dignissimos alias ipsum minima consequuntur?
						</p>
					</div>
				</div>
			</section>

			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
						Our vision at The World Fitness Zone is to inspire and empower individuals to achieve their fitness goals, guided by the legacy of Mr. Sandeep Sharma, a former Mr. India. With top-class facilities and a supportive community, we aim to transform lives and promote holistic well-being in a world-class fitness environment.
						</p>
					
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="VisionImage" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="VisionImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
						At The World Fitness Zone, we are more than just a gym; we are a close-knit fitness community that fosters camaraderie, support, and encouragement. We believe that together, we can achieve greatness, and our members find a friendly and motivating atmosphere that keeps them coming back for more.
						</p>
						<p>
						Join us at The World Fitness Zone, and let Mr. Sandeep Sharma's expertise and passion for fitness guide you towards a healthier, fitter, and happier version of yourself. Together, let's embark on a transformative fitness journey and experience the power of true dedication to your well-being. Come, be a part of our fitness family, and let's redefine fitness, one step at a time!
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
