// Creating a Hello World basic message using React JS
// In React.createElement() there are 3 parameters -
// First parameter is the element we want to create
// Second parameter is the properties (attributes) of the element
// Third parameter is the text content or child elements
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from React");
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
</div>*/ // To create 2 child elements we pass them in an array
// We did it in child1 and child2 and also
// with h1 and h2
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "indentedHeadingH1Child1"
        }, "Hello I'm a h1 tag from React (Child 1)"),
        React.createElement("h2", {
            id: "indentedHeadingH2Child1"
        }, "Hello I'm a h2 tag from React (Child 1)")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "indentedHeadingH1Child2"
        }, "Hello I'm a h1 tag from React (Child 2)"),
        React.createElement("h2", {
            id: "indentedHeadingH2Child2"
        }, "Hello I'm a h2 tag from React (Child 2)")
    ])
]);
// We passed parent div to be rendered and to be displayed inside the main div
// NOTE -> IF ANYTHING WAS ALREADY THERE IS MAIN DIV IT WILL GET REPLACED WITH THE NEW HEADING WE CREATED
// NOTE -> BUT IF WE HAVE ELEMENTS ABOVE/BELOW THE MAIN WE ARE RENDERING IT WILL NOT BE REPLACED
main.render(parent);

//# sourceMappingURL=index.672d4772.js.map
