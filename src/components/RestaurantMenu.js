import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const { itemName, restName } = useRestaurantMenu(resId);

	return (
		<div className="m-5">
			<h2 className="text-2xl font-bold"> {restName} </h2>

			<div>
				<h3 className="text-lg font-semibold mt-4 mb-4"> Recomended Items </h3>
				<ul>
					{itemName.map((item) => {
						return (
							<div
								className=""
								key={item.card.info.id}>
								<li className="w-200 bg-gray-100 rounded-md m-2 p-3 flex justify-between hover:bg-yellow-400">
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
