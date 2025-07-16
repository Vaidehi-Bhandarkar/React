const RestaurantCard = (props) => {
	// console.log("This is component: ",props);
	const { restData } = props;
	const { name, aggregateRating, servesCuisine, image } = restData?.item; //<- For static data of Zomato

	return (
		<div className="rest-card">
			<img
				className="img-logo"
				alt="Food-img"
				src={image}
			/>
			<h3> {name} </h3>
			<h4> {aggregateRating?.ratingValue} ⭐️</h4>
			<h4> {servesCuisine} </h4>
		</div>
	);
};

export default RestaurantCard;
