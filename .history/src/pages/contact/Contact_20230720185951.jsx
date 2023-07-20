import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
	return (
		<>
			<Header title="Get In Touch" image={HeaderImage}>
				Feel free to reach out to us
				
			</Header>

			<section className="contact">
				<div className="container contact__container">
					<div className="contact__wrapper">
						<a
							href="tel:9896960452"							target="_blank"
							rel="noreferrer noopener"
						>
							<MdPhone />
						</a>
						<a
							href="https://www.facebook.com/eniola.ademola.1610/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<BsMessenger />
						</a>
						<a
							href="https://wa.me/+2347013909098"
							target="_blank"
							rel="noreferrer noopener"
						>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
