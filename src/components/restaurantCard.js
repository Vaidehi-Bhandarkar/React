const RestaurantCard = (props) => {
	// console.log("This is component: ",props);
	const { restData } = props;
	const { name, avgRating, cuisines, cloudinaryImageId, sla } = restData?.info; //<- For static data of Zomato

	return (
		<div className="rest-card">
			{/* ZOMATO STATIC DATA */}
			{/* <img
				className="img-logo"
				alt="Food-img"
				src={image}
			/>
			<h3> {name} </h3>
			<h4> {aggregateRating?.ratingValue} ⭐️</h4>
			<h4> {servesCuisine} </h4> */}
			{/* SWIGGY DYNAMIC DATA */}
			<img
				className="img-logo"
				alt="Food-img"
				src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
			/>
			<h3> {name} </h3>
			<h4> {avgRating} ⭐️</h4>
			<h4> {cuisines.join(", ")} </h4>
			<h4> {sla?.slaString} </h4>
		</div>
	);
};

export default RestaurantCard;
