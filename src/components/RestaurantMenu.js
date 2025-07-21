import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const { itemName, restName } = useRestaurantMenu(resId);

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
