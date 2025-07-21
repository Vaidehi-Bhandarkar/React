import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constants";

const RestaurantMenu = () => {
	const [itemName, setItemName] = useState([]);
	const [restName, setRestName] = useState("");

	const { resId } = useParams();

	useEffect(() => {
		getMenuData();
	}, []);

	const getMenuData = async () => {
		// console.log(RESTAURANT_URL + resId);
		const menuData = await fetch(RESTAURANT_URL + resId);

		const resp = await menuData.json();
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
		const itemCard = resp?.data?.cards
			?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards)
			?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
				(card) => card?.card?.card?.itemCards,
			);
		console.log("IC: ", itemCard);

		setItemName(itemCard?.card?.card?.itemCards || []);
		// console.log("ITEM: ", itemName);

		setRestName(resp?.data?.cards[0]?.card?.card?.text || "");
	};

	return (
		<div>
			<h2> {restName} </h2>

			<div className="menuItems">
				<h3> Recomended </h3>
				<ul>
					{itemName.map((item) => {
						return (
							<div
								className="item-row"
								key={item.card.info.id}>
								<li className="item-details">
									<span>{item.card.info.name}</span>
									<span>
										{" Rs. "}
										{item.card.info.price / 100 ||
											item.card.info.defaultPrice / 100}
									</span>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
