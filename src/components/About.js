import { useState } from "react";

const About = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="m-5">
			<h1 className="font-bold text-lg mb-1.5"> ABOUT US </h1>
			<h2 className="font-medium text-md m-1"> This is About Us </h2>
			<h4 className="font-medium text-md m-1"> Count: {count}</h4>
			<button
				className="font-medium text-md m-1 bg-gray-300 px-3.5 py-0.5 rounded-md cursor-pointer"
				onClick={() => {
					setCount(count + 1);
				}}>
				Click to Increase Count
			</button>
		</div>
	);
};

export default About;
