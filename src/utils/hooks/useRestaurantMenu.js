import { useEffect, useState } from "react";
import { ITEM_CATEGORY, RESTAURANT_URL } from "../constants";

const useRestaurantMenu = (resId) => {
	const [itemName, setItemName] = useState([]);
	const [itemCategory, setItemCategory] = useState([]);
	const [restName, setRestName] = useState("");

	useEffect(() => {
		if (resId) getRestaurantDetails(resId);
	}, [resId]);

	const getRestaurantDetails = async (resId) => {
		const data = await fetch(RESTAURANT_URL + resId);
		const resp = await data.json();

		setRestName(resp?.data?.cards[0]?.card?.card?.text || "");

		const itemCards = resp?.data?.cards?.find(
			(card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards,
		)?.groupedCard?.cardGroupMap?.REGULAR?.cards;

		// console.log("ITEM CARD", itemCards);

		const itemCategoryCards = itemCards.filter((card) => {
			return card?.card?.card?.["@type"] === ITEM_CATEGORY;
		});

		// console.log("ICC:", itemCategoryCards);
		setItemCategory(itemCategoryCards);

		setItemName(itemCards?.card?.card?.itemCards || []);
	};
	return { itemName, restName, itemCategory };
};

export default useRestaurantMenu;

//ORIGINAL CODE:
// const getMenuData = async () => {
// 	// console.log(RESTAURANT_URL + resId);
// 	const menuData = await fetch(RESTAURANT_URL + resId);

// 	const resp = await menuData.json();
// console.log("MENU DATA: ", resp);

// //HERE, GroupedCard can be at any number of cards in resp.data
// const groupedCardNumber = resp?.data?.cards?.find(
// 	(card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards,
// );
// // console.log("GC: ", groupedCardNumber);

// //Similar for recommended item
// const recommendedItem =
// 	groupedCardNumber?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
// 		(card) => card?.card?.card?.itemCards,
// 	);
// // console.log("RI: ", recommendedItem);

//ABOVE 2 TIMES CONVERSION CAN BE REDUCED TO ONE var as follows:
// 	const itemCard = resp?.data?.cards
// 		?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards)
// 		?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
// 			(card) => card?.card?.card?.itemCards,
// 		);
// 	// console.log("IC: ", itemCard);

// 	setItemName(itemCard?.card?.card?.itemCards || []);
// 	// console.log("ITEM: ", itemName);

// 	setRestName(resp?.data?.cards[0]?.card?.card?.text || "");
// };
