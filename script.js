// Now after removing cdn and installing react we need to import it into our codebase
import React from "react";
import ReactDOM from "react-dom/client";

// Creating a Hello World basic message using React JS

// In React.createElement() there are 3 parameters -
// First parameter is the element we want to create
// Second parameter is the properties (attributes) of the element
// Third parameter is the text content or child elements
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
// This heading will return as an object

// Here we create a main div in which all the components will be rendered
const main = ReactDOM.createRoot(document.querySelector("#main"));

// We passed heading to be rendered and to be displayed inside the main div
// NOTE -> IF ANYTHING WAS ALREADY THERE IS MAIN DIV IT WILL GET REPLACED WITH THE NEW HEADING WE CREATED
// NOTE -> BUT IF WE HAVE ELEMENTS ABOVE/BELOW THE MAIN WE ARE RENDERING IT WILL NOT BE REPLACED
main.render(heading);

// Now if we want to create an indented html structure to be displayed
/* <div id="parent> 
        <div id="child1">
            <h1>   </h1>
            <h2>   </h2>
        </div>
        <div id="child2">
            <h1>   </h1>
            <h2>   </h2>
        </div
</div>*/

// To create 2 child elements we pass them in an array
// We did it in child1 and child2 and also
// with h1 and h2
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { id: "indentedHeadingH1Child1" },
      "Hello I'm a h1 tag from React (Child 1)"
    ),
    React.createElement(
      "h2",
      { id: "indentedHeadingH2Child1" },
      "Hello I'm a h2 tag from React (Child 1)"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "indentedHeadingH1Child2" },
      "Hello I'm a h1 tag from React (Child 2)"
    ),
    React.createElement(
      "h2",
      { id: "indentedHeadingH2Child2" },
      "Hello I'm a h2 tag from React (Child 2)"
    ),
  ]),
]);

// We passed parent div to be rendered and to be displayed inside the main div
// NOTE -> IF ANYTHING WAS ALREADY THERE IS MAIN DIV IT WILL GET REPLACED WITH THE NEW HEADING WE CREATED
// NOTE -> BUT IF WE HAVE ELEMENTS ABOVE/BELOW THE MAIN WE ARE RENDERING IT WILL NOT BE REPLACED
main.render(parent);

// JSX -> Similar to HTML or XML syntax
// This JSX code is not accepted by React or is not Javascript code,
// But we can still see the output of this JSX code on our screen
// This is because this JSX code is TRANSPILED by Parcel with the help of Babel
// Babel is a JavaScript transpiler that is mainly used to convert ECMAScript code into backwards-compatible JavaScript code
// JSX is transpiled into React.createElement before getting rendered. After that is is rendered as React.createElement
// Babel converts JSX Code to React.createElement code
// Round brackets in jsx for multi line code
// Camel casing is used in JSX Code. Use of className instead of class.
const jsxHeading = <h1 className="jsxHeading">Hello World from JSX</h1>;

// Components in React JS
// There are 2 types of components in React
// 1. Functional Components (NEW METHOD) - They are simple JavaScript functions that return JSX
// 2. Class Components (OLD METHOD) - They are JavaScript classes that extend the React.Component class

// The component name should always be CAPITALIZED
// Component Name can be created using arrow function and regular function also
const TileComponent = function () {
  return <div className="tileComponent">Hello World from Tile Component</div>;
};

// Used fragments as we can return only one thing at a time
// Component Composition -> Component inside a component
const HeadingComponent = () => {
  return (
    <>
      <TileComponent />
      <h1 className="headingComponent">Hello World from Heading Component</h1>
    </>
  );
};

// Method to render jsx element
main.render(jsxHeading);

// Method to render functional component
main.render(<HeadingComponent />);
