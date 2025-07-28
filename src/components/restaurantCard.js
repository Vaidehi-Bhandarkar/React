import RestaurantMenu from "./RestaurantMenu";

const RestaurantCard = (props) => {
	// console.log("This is component: ", props);
	const { restData } = props;
	const { name, avgRating, cuisines, cloudinaryImageId, sla, id } =
		restData?.info; //<- For static data of Zomato

	return (
		<div
			className="shadow-md hover:bg-yellow-400 w-50 h-110 pl-3 pr-3 pt-2 rounded-lg m-1"
			onClick={() => {
				return <RestaurantMenu restId={id} />;
			}}>
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
				className="w-50 h-50 rounded-lg"
				alt="Food-img"
				src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
			/>
			<h3 className="text-lg font-semibold pr-2 pt-2 pb-2"> {name} </h3>
			<h4 className="text-md font-small pr-2 pb-1"> {avgRating} ⭐️</h4>
			<h4 className="text-md font-small pr-2 pb-1"> {cuisines.join(", ")} </h4>
			<h4 className="text-md font-small pr-2 pb-1"> {sla?.slaString} </h4>
		</div>
	);
};

// HIGHER ORDER FUNCTION - A function that takes Component as an argument and returns enhanced Component
export const labelRestaurant = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className="text-white bg-green-700 m-2 p-2 absolute rounded-lg">
					Open
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
