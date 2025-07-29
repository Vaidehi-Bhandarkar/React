import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

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
			<UserContext.Provider value={{ loggedInUser: "TEST", setUserName }}>
				<Header />
				{/* NESTED Context Provider */}
				<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
					<Outlet />
				</UserContext.Provider>
			</UserContext.Provider>
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
