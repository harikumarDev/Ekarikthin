import React from "react";
import "./Glitch.css";

export default function Glitch(props) {
	return (
		<section className="Glitch-section">
			<div className="Glitch-container">
				<p className="Glitch-glitch">
					<span aria-hidden="true">{props.value}</span>
					{props.value}
					<span aria-hidden="true">{props.value}</span>
				</p>
			</div>
		</section>
	);
}
