import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../utils/redux/cartSlice";

const calcTotal = (cartItems) => {
	const total = cartItems.reduce((total, item) => {
		return total + (item.price ? item.price / 100 : item.defaultPrice / 100);
	}, 0);

	return total.toFixed(2);
};

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((store) => store.cart.items);
	// console.log("CCCC", cartItems);

	const cartClear = () => {
		dispatch(clearCart());
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="m-10 font-bold text-xl"> Cart </h1>
			<div className="flex w-9/12 justify-between">
				<button
					className="m-5 px-5 border-2 rounded-md cursor-pointer "
					onClick={() => cartClear()}>
					Clear Cart
				</button>
				<h3 className="font-bold text-md m-5">
					Total Amount: {calcTotal(cartItems)}
				</h3>
			</div>

			<div className="w-9/12">
				{cartItems.map((item, index) => {
					return (
						<div
							key={`${item.id}-${index}`}
							className="p-2 m-3 border-b-gray-100 h-40 shadow-md rounded-md">
							<div className="flex justify-between">
								<div className="w-10/12">
									<div className="mb-3 mt-2 flex justify-between">
										<div className="font-bold text-lg">{item.name}</div>
										<div className="font-medium text-lg mr-5">
											₹{item.price ? item.price / 100 : item.defaultPrice / 100}
										</div>
									</div>
									<div className="text-md font-medium mt-2.5">
										{item.description}
									</div>
								</div>

								<div className="w-3/12 h-35 relative">
									<img
										className="w-full h-full object-contain rounded-lg"
										alt={`${item.name}`}
										src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cart;
