import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard from "./restaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
	const [restaurantsList, setRestaurantsList] = useState([]);
	const [filterList, setFilterList] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		getData();
	}, []);

	//ABOVE STMT IS SAME AS
	// const arr = useState(restaurantList);
	// const [restList, useRestList] = arr; //Destructuring of useState response Array

	const getData = async () => {
		const data = await fetch(
			"https://swiggy-api-4c740.web.app/swiggy-api.json",
		);
		console.log("DATA: ", data);

		const res = await data.json();

		// console.log(
		// 	"RESULT DATA: ",
		// 	res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
		// );

		const restaurantData =
			res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants || [];

		setFilterList(restaurantData);
		setRestaurantsList(restaurantData);
	};

	if (filterList.length === 0) {
		return <Shimmer />;
	}

	return (
		<div className="body">
			<div className="filter">
				<button
					className="top-restaurants"
					onClick={() => {
						console.log("RSTLST: ", restaurantsList);
						let res = restaurantsList?.filter((item) => {
							return item?.info?.avgRating > 4.2;
						});
						//The below line is to fix the issue of main rendering of Body component
						setFilterList(res);
					}}>
					Top Rated Restaurants
				</button>

				<div className="search-bar">
					<input
						type="search"
						placeholder="Restaurant Name"
						onChange={(event) => {
							setSearchText(event.target.value);
						}}
					/>

					<button
						className="search-restaurants"
						onClick={() => {
							let res = restaurantsList?.filter((item) => {
								return item?.info?.name
									?.toLowerCase()
									?.includes(searchText.toLowerCase());
							});
							//The below line is to fix the issue of main rendering of Body component

							//FILTER LIST STORES THE COPY OF MAIN LIST TO FIX BUG IN SEARCH BAR
							setFilterList(res);
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
				{filterList?.map((item) => {
					return (
						<RestaurantCard
							restData={item}
							key={item.info.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
