import React from "react";
import ReactDOM from "react-dom/client";


//INITIAL LEARNING
// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World with React!"
// );
// console.log(heading); //React creates a JS object

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
    
//         React.createElement("div", {id: "child"}, [
//             React.createElement("h1", { key: "h1" }, "H1 Tag"),
//             React.createElement("h2", { key: "h2" }, "H2 Tag"),
//         ]),
    
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(parent);

//JSX :
const jsxHeading = (
    <h1 id="heading" tabIndex="500"> 
        This is render using JSX 
    </h1>
);
const image = <img src="" />

console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("heading"));

// root.render(jsxHeading);

//FUNCTIONAL COMPONENT:
//Different syntax:

const Test1 = () => true;

//is same as

const Test2 = () => {
    return true;
}

//is same as

const Test3 = () => (
    true
);

// example 2:

const Head1 = () => <h1> This is Functional component </h1>;

//is same as

const Head2 = () => {
    return <h1> This is Functional component </h1>;
}

//is same as

const Head3 = () => (
    <h1> This is Functional component </h1>
);

//React Element:
const heading = (
    <div>
        <h1>React Element</h1>
    </div>
);

//React Component:
const Heading = () => {
    return (
         <div id="container">
            <h1>React Functional Component</h1>

            {/* Different ways of calling react element */}
            <Title />
            <Title> </Title>
            {Title()}

            <h2> {155 + 400} </h2> {/*JS inside JSX */}
            <h2> {console.log("ufhsbvsbjhb")} </h2> {/*JS inside JSX, console also gets rendered */}

            {heading} {/*React Element inside React Component */}
        </div>
    )
};

//Above code is COMPONENT COMPOSITION: Means calling a react component inside a component. Here,<Title /> inside Heading

const Title = () => (
    <div id="smc">
        <h2> Learning React </h2>
    </div>
)

//The difference between "React Element" & "React Component" is arrow fn and return condition

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);