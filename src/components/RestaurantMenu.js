import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const { itemName, restName, itemCategory } = useRestaurantMenu(resId);
	const [showIndex, setShowIndex] = useState(null);

	return (
		<div className="m-5 flex flex-col items-center">
			<h2 className="text-2xl font-bold"> {restName} </h2>

			<div>
				{itemCategory.map((item, index) => {
					// console.log("icc", item);
					return (
						//CONTROLLED COMPONENT:
						<RestaurantCategory
							key={item?.card?.card?.categoryId}
							data={item}
							showItems={index === showIndex ? true : false} //To set remaining accordians to false
							setShowIndex={() => {
								setShowIndex((prevIdx) => (prevIdx === index ? null : index));
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RestaurantMenu;
