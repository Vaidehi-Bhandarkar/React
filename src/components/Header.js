import { useContext, useState } from "react";

import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");

	const onlineStatus = useOnlineStatus();
	const { loggedInUser } = useContext(UserContext);

	// Subscribe to store using selector
	const cartItems = useSelector((store) => store.cart.items);

	return (
		<div className="flex justify-between bg-yellow-400 shadow">
			<div>
				<img
					className="w-40"
					src={LOGO_URL}
				/>
			</div>

			<div>
				<ul className="flex pt-15 mr-10">
					<li className="px-5 text-lg font-semibold ">
						Online Status: {onlineStatus ? "✅" : "🔴"}{" "}
					</li>
					<li className="text-lg font-semibold px-5">
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={"/"}>
							Home
						</Link>
					</li>
					<li className="px-5 text-lg font-semibold ">
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={"/about"}>
							About Us
						</Link>
					</li>
					<li className="px-5 text-lg font-semibold ">
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={"/contact"}>
							Contact Us
						</Link>
					</li>
					<li className="px-5 text-lg font-semibold ">
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={"/grocery"}>
							Grocery
						</Link>
					</li>
					<li className="px-5 text-lg font-semibold ">
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={"/cart"}>
							Cart - {cartItems.length}
						</Link>
					</li>
					<li className="px-2">
						<button
							className="bg-gray-300 px-8 py-0.5 cursor-pointer rounded-md shadow-md text-lg font-semibold"
							onClick={() => {
								loginBtn === "Login"
									? setLoginBtn("Logout")
									: setLoginBtn("Login");
							}}>
							{loginBtn}
						</button>
					</li>

					{/* useContext hook */}
					<li className="px-5 text-lg font-semibold "> {loggedInUser} </li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
