import { useEffect, useState } from "react";
// import restaurantList from "../utils/mockData";
import RestaurantCard from "./restaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
		);
		// console.log("DATA: ", data);

		const res = await data.json();

		// console.log(
		// 	"RESULT DATA: ",
		// 	res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
		// );

		//Optional Chaining
		const restaurantData =
			res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants || [];

		setFilterList(restaurantData);
		setRestaurantsList(restaurantData);
	};

	const handleSearch = () => {
		const res = restaurantsList?.filter((item) => {
			return item?.info?.name
				?.toLowerCase()
				?.includes(searchText.toLowerCase());
		});
		//The below line is to fix the issue of main rendering of Body component
		//FILTER LIST STORES THE COPY OF MAIN LIST TO FIX BUG IN SEARCH BAR
		if (res.length === 0 || searchText === "") setFilterList(restaurantsList);
		else setFilterList(res);
	};

	//CONDITIONAL RENDER

	return filterList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<button
					className="top-restaurants"
					onClick={() => {
						// console.log("RSTLST: ", restaurantsList);
						let res = restaurantsList?.filter((item) => {
							return item?.info?.avgRating > 4.2;
						});
						//The below line is to fix the issue of main rendering of Body component
						setFilterList(res);
					}}>
					Top Rated Restaurants
				</button>

				<div className="search-bar">
					{/* onKeyDown is functionality of text and not search button as fcus is on text box while typing */}
					<input
						type="search"
						placeholder="Restaurant Name"
						value={searchText}
						onChange={(event) => {
							setSearchText(event.target.value);
						}}
						onKeyDown={(event) => {
							if (event.keyCode === 13) {
								handleSearch();
							}
						}}
					/>

					<button
						className="search-restaurants"
						onClick={() => {
							// const res = restaurantsList?.filter((item) => {
							// 	return item?.info?.name
							// 		?.toLowerCase()
							// 		?.includes(searchText.toLowerCase());
							// });
							// //The below line is to fix the issue of main rendering of Body component

							// //FILTER LIST STORES THE COPY OF MAIN LIST TO FIX BUG IN SEARCH BAR
							// setFilterList(res);
							handleSearch();
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
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							key={item.info.id}
							to={"/restaurant/" + item.info.id}>
							<RestaurantCard restData={item} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
