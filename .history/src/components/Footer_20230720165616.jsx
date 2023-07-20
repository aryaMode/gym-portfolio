import React from "react";
import { Link } from "react-router-dom";
import {logoName} from "../data";
import Logo from "../images/logo.png";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						{/* <img src={Logo} alt="Footer Logo" /> */}
					{logoName}
					</Link>
					<p>
						Consectetur non nostrud enim nostrud est culpa ullamco incididunt
						nisi. Consectetur non nostrud enim nostrud est culpa ullamco
						incididunt nisi.
					</p>
					<div className="footer__socials">
						<a
							href="https://youtube.com/@Thesandeep325"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaYoutube />
						</a>
						<a
							href="https://www.facebook.com/profile.php?id=100000823973714&mibextid=LQQJ4d"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
				
						<a
							href="https://instagram.com/the_world_fitness_zone_?igshid=MzRlODBiNWFlZA=="
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Case Studies</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Communities</Link>
					<Link to="/constact">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/contact">Plans</Link>
					<Link to="/s">Trainers</Link>
				</article>
			</div>
			<br />
			<br />
			<br />
			<br />
		</footer>
	);
};

export default Footer;
