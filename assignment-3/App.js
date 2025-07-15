import React from "react";
import ReactDOM from "react-dom/client";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ReactLogo = new URL("./react.png", import.meta.url);

const Header = () => {
    return (
        <div id="container">
            <img src={ReactLogo.href} alt="This is React Logo" id="logo"/>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span id="heading">Search:</span>
                <input type="search" id="search" placeholder="Type something..." />
            </div>
            
            <i className="fa-solid fa-user" id="user-icon" />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);