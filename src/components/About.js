import { useState } from "react";

const About = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1> ABOUT US </h1>
			<h2> This is About Us </h2>
			<h4> Count: {count}</h4>
			<button
				onClick={() => {
					setCount(count + 1);
				}}>
				{" "}
				Click to Increase Count{" "}
			</button>
		</div>
	);
};

export default About;
