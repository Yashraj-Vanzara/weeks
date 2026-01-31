// ! {} this is where we put attributes for our tag

const heading = React.createElement("h1", {id:"Parent"}, "Hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
