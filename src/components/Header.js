import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");

	const onlineStatus = useOnlineStatus();

	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src={LOGO_URL}
				/>
			</div>

			<div className="nav-items">
				<ul>
					<li>Online Status: {onlineStatus ? "✅" : "🔴"} </li>
					<li>
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={"/"}>
							{" "}
							Home{" "}
						</Link>
					</li>
					<li>
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={"/about"}>
							{" "}
							About Us{" "}
						</Link>
					</li>
					<li>
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={"/contact"}>
							{" "}
							Contact Us{" "}
						</Link>
					</li>
					<li>
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={"/grocery"}>
							Grocery
						</Link>
					</li>
					<li> Cart </li>
					<li>
						<button
							className="login-btn"
							onClick={() => {
								loginBtn === "Login"
									? setLoginBtn("Logout")
									: setLoginBtn("Login");
							}}>
							{loginBtn}
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
