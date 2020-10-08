import React from "react";

export default function About({ showAbout }) {
	const isHiddenClass = showAbout ? null : "hidden";
	return (
		<>
			<div id="overlay" className={isHiddenClass} aria-hidden="true"></div>
			<article id="about" className={isHiddenClass} aria-hidden={!showAbout}>
				<h2>About</h2>
				<p>
					This project is a continuation of a Python program written for a woodworking project. It
					has been converted to{" "}
					<a href="https://github.com/bost-ty/trapezoid">vanilla JavaScript</a> already. This is the
					newest version, <code>trapezoid-react</code>.
				</p>
			</article>
		</>
	);
}
