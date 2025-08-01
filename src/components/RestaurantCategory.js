import ItemDetails from "./ItemDetails";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	// console.log("PROP:", showItems);

	//lifting state up
	const handleClick = () => {
		setShowIndex();
	};

	return (
		<div
			key={data?.card?.card?.categoryId}
			className="w-250 bg-gray-100 rounded-md m-2 p-3 text-xl font-semibold mt-4 mb-4">
			<div
				className=" flex justify-between cursor-pointer"
				onClick={handleClick}>
				<span>
					{data?.card?.card?.title} ({data.card.card.itemCards.length})
				</span>
				<span className="align-middle"> ˅ </span>
			</div>
			<div className="text-sm font-light">
				{showItems && <ItemDetails data={data?.card?.card} />}
			</div>
		</div>
	);
};

export default RestaurantCategory;
