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
		console.log(RESTAURANT_URL + resId);
		const menuData = await fetch(RESTAURANT_URL + resId);

		const resp = await menuData.json();

		console.log("MENU DATA: ", resp);

		setItemName(
			resp?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
				?.card?.itemCards || [],
		);

		setRestName(resp?.data?.cards[0]?.card?.card?.text || "");
	};

	console.log("ITEM: ", itemName);
	console.log("REST NAME: ", restName);
	return (
		<div>
			<h1> {restName} </h1>

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
