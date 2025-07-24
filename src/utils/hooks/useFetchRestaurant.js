import { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "../constants";

const useFetchRestaurant = () => {
	const [restaurantsList, setRestaurantsList] = useState([]);
	const [filterList, setFilterList] = useState([]);

	//ABOVE STMT IS SAME AS
	// const arr = useState(restaurantList);
	// const [restList, useRestList] = arr; //Destructuring of useState response Array

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const data = await fetch(RESTAURANT_LIST);
		const response = await data.json();

		const restaurantData =
			response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants || [];

		setFilterList(restaurantData);
		setRestaurantsList(restaurantData);
	};

	return { filterList, restaurantsList };
};

export default useFetchRestaurant;
