import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0" id="contact">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src="https://lh3.googleusercontent.com/pw/ABLVV86_uuKs2hIS5PSrqr4wOWpPy-bTC1a0mhrfKHQX_9f7BiA6AzI0aCU_JdfJgqp2pswZfXkWlRHP9WA8UiHdRreBNMQ5Hm9fWxKy_pqhNYWrh-zp0CGg_B3Le-KEE9HbOB2ZF_Ggu6oE3phfYdZI3hB8gw=w500-h500-s-no-gm?authuser=0"
								
								style={{ width: "500px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4 ml-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Reach Out to me!</h2>
							<p className="lead text-white mt-3">
								I am always up to discuss a really cool idea for a project or a cup of coffee ☕️. Feel free to connect with me at <a href="mailto:denishsuhagiya18@gmail.com" className="text-yellow"> denishsuhagiya18@gmail.com </a>
							</p>
							<p className="text-white mt-3">{prof.bio}</p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								Mumbai, Maharashtra, India
							</div>
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
