import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy, useEffect, useState } from "react";

import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/redux/appStore";

// LAZY LOAD GROCERY COMPONENT
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
	//STATIC AUTHENTICATION: FOR TESTING useContext
	const [userName, setUserName] = useState();

	useEffect(() => {
		//SOME API CALL TO GET AUTH DETAILS. Currently, giving static data
		const data = {
			name: "Vaidehi",
		};

		setUserName(data.name);
	}, []);

	return (
		<div>
			<Provider store={appStore}>
				<UserContext.Provider value={{ loggedInUser: "TEST", setUserName }}>
					<Header />
					{/* NESTED Context Provider */}
					<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
						<Outlet />
					</UserContext.Provider>
				</UserContext.Provider>
			</Provider>
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				// The SUSPENSE is used in React for fallback if the component is huge and needs more time to load
				element: (
					<Suspense fallback={<h3> Loading... </h3>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
