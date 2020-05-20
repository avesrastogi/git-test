 const  pet = ({ name, animal, breed})=> {
     return React.createElement("div", {}, [
         React.createElement("h1", {}, name),
         React.createElement("h2", {}, animal),
         React.createElement("h3", {}, breed)
     ]);
 };
 const App = ()=> {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt me!")
        React.createElement(Pet, {
            name: "Luna", 
            animal: "Dog", 
            breed: "Lab"}),
        React.createElement(Pet, {
            name: "Luna", animal: "Dog", breed: "Lab"}),
        React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Lab"})
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root");
);