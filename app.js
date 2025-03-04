
const parent = React.createElement("div", { id: "parent" },
   [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "hey from child1"),
        React.createElement("h1", {}, "hey from child2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "hey from child1"),
        React.createElement("h1", {}, "hey from child2")
    ]),
   ]
)

const heading = React.createElement("h1", {}, "Hello from react")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
