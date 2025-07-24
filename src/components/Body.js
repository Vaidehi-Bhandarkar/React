import { useState } from "react";
// import restaurantList from "../utils/mockData";
import RestaurantCard from "./restaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchRestaurant from "../utils/hooks/useFetchRestaurant";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
	//All the useStates should be defined at the top
	const [searchText, setSearchText] = useState("");
	const onlineStatus = useOnlineStatus();
	//By default, hooks operation is async await
	const { filterList, restaurantsList, setFilterList } = useFetchRestaurant();

	if (!onlineStatus) {
		return (
			<h1>Seems you're Offline. Connect to network for seamless browsing!!</h1>
		);
	}

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
							return item?.info?.avgRating > 4.5;
						});
						//The below line is to fix the issue of main rendering of Body component
						setFilterList(res);
					}}>
					Top Rated Restaurants
				</button>

				<div className="search-bar">
					{/* onKeyDown is functionality of text and not search button as focus is on text box while typing */}
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
