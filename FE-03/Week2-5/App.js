// ! {} this is where we put attributes for our tag

const heading = React.createElement("h1", {id:"Parent"}, "Hello world");
// heading is object also createElement gives us object where {} is attribute and hello world is children and whole thing is props
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
