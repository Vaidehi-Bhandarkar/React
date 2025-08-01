import { addItem, removeItem } from "../utils/redux/cartSlice";

import { useDispatch } from "react-redux";

const ItemDetails = (data) => {
	const itemCrds = data?.data?.itemCards;

	const dispatcher = useDispatch();
	const handleClickAdd = (item) => {
		dispatcher(addItem(item));
	};

	const handleClickRemove = (item) => {
		console.log(item);
		dispatcher(removeItem(item));
	};

	return (
		<div>
			{itemCrds.map((item, index) => {
				return (
					<div
						key={`${item?.card?.info?.id}-${index}`}
						className="p-2 m-3 border-b-gray-100 h-40 shadow-md hover:bg-yellow-400 rounded-md">
						<div className="flex justify-between">
							<div className="w-10/12">
								<div className="mb-3 mt-2 flex justify-between">
									<div className="font-bold text-lg">
										{item?.card?.info?.name}
									</div>
									<div className="font-medium text-lg mr-5">
										₹
										{item?.card?.info?.price
											? item?.card?.info?.price / 100
											: item?.card?.info?.defaultPrice / 100}
									</div>
								</div>
								<div className="text-md font-medium mt-2.5">
									{item?.card?.info?.description}
								</div>
							</div>

							<div className="w-3/12 h-35 relative">
								<img
									className="w-full h-full object-contain rounded-lg"
									alt={`${item?.card?.info?.name}`}
									src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`}
								/>
								<div className="absolute bottom-2 flex justify-start  w-full">
									<button
										className="p-2 m-1 bg-amber-700 text-amber-50 font-medium rounded-md cursor-pointer"
										onClick={() => handleClickRemove(item.card.info)}>
										-
									</button>
									<button
										className="p-2 m-1 bg-amber-700 text-amber-50 font-medium rounded-md cursor-pointer"
										onClick={() => handleClickAdd(item.card.info)}>
										+
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ItemDetails;
