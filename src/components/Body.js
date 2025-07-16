import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard from "./restaurantCard";

const Body = () => {
	const [restaurantsList, useRestaurantsList] = useState(restaurantList);
	const [filterList, useFilterList] = useState(restaurantList);
	const [searchText, useSearchText] = useState("");

	//ABOVE STMT IS SAME AS
	// const arr = useState(restaurantList);
	// const [restList, useRestList] = arr; //Destructuring of useState response Array

	useEffect(() => {
		// getData();
	}, []);

	// const getData = async () => {
	//     const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
	//     console.log("DATA: ", data);

	//     const res = await data.json();

	//     console.log("RESULT DATA: ", res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	//     useRestaurantsList({
	//         ...restaurantsList,
	//         itemListElement: res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info
	//     });

	//     console.log("RSTL: ", restaurantsList);
	// }

	return (
		<div className="body">
			<div className="filter">
				<button
					className="top-restaurants"
					onClick={() => {
						let res = restaurantsList.itemListElement.filter(({ item }) => {
							return item?.aggregateRating?.ratingValue > 4;
						});
						//The below line is to fix the issue of main rendering of Body component
						useRestaurantsList({
							...restaurantsList,
							itemListElement: res,
						});
					}}>
					Top Rated Restaurants
				</button>

				<div className="search-bar">
					<input
						type="search"
						placeholder="Restaurant Name"
						onChange={(event) => {
							useSearchText(event.target.value);
						}}
					/>

					<button
						className="search-restaurants"
						onClick={() => {
							let res = restaurantsList.itemListElement.filter(({ item }) => {
								return item?.name
									?.toLowerCase()
									?.includes(searchText.toLowerCase());
							});
							//The below line is to fix the issue of main rendering of Body component

							//FILTER LIST STORES THE COPY OF MAIN LIST TO FIX BUG IN SEARCH BAR
							useFilterList({
								...filterList,
								itemListElement: res,
							});
						}}>
						Search
					</button>
				</div>
			</div>

			<div className="rest-container">
				{/* STATIC */}
				{/* <RestaurantCard restData={restaurantList?.itemListElement[0]} />
                <RestaurantCard restData={restaurantList?.itemListElement[1]} />
                <RestaurantCard restData={restaurantList?.itemListElement[2]} />   */}

				{/* DYNAMIC */}
				{filterList.itemListElement.map((item) => (
					<RestaurantCard
						restData={item}
						key={item.position}
					/>
				))}
			</div>
		</div>
	);
};

export default Body;
