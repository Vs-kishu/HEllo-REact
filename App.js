const heading = React.createElement(
  "h1",
  { id: "heading", kishan: "sona" },
  "Hello Kishan"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);
