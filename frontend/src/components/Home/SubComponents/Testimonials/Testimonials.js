import React from "react";
import "../../Home.css";
import "../../queries.css";
import "./Testimonials.css";
// import demon from "../../../../images/demon.jpg";
import Glitch from "../../../Global/Glitch/Glitch";

export default function Testimonials() {
	return (
		<>
			<section className="Testimonials-section" id="Testimonials-section">
				<Glitch value={"SOME AWESOME EXPERIENCES"}></Glitch>
				<h2 className="u-colorful-text-4">{/* SOME AWESOME EXPERIENCES */}</h2>
				<div className="tests">
					<div className="test test1">
						<blockquote>
							lorem3 is Lorem ipsum dolor sit amet, con lorem3 lorem3 is Lorem
							ipsum dolor sit amet, con lorem3 lorem3 is Lorem ipsum dolor sit
							amet, con lorem3
						</blockquote>
						<cite>
							<img src={demon} alt="review" />
							Alberto Duncan
						</cite>
					</div>
					<div className="test test2">
						<blockquote>
							lorem3 is Lorem ipsum dolor sit amet, con lorem3 lorem3 is Lorem
							ipsum dolor sit amet, con lorem3 lorem3 is Lorem ipsum dolor sit
							amet, con lorem3
						</blockquote>
						<cite>
							<img src={demon} alt="review" />
							Joana Silva
						</cite>
					</div>
					<div className="test test3">
						<blockquote>
							lorem3 is Lorem ipsum dolor sit amet, con lorem3 lorem3 is Lorem
							ipsum dolor sit amet, con lorem3 lorem3 is Lorem ipsum dolor sit
						</blockquote>
						<cite>
							<img src={demon} alt="review" />
							Milton Chapman
						</cite>
					</div>
				</div>
			</section>
		</>
	);
}
