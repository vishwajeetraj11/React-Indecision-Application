console.log("App.js is running");

// JSX - Javascript XML
var app = {
    title: 'Indecision Application',
    subtitle: 'Put your lives in the hands of computer'
};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

var user = {
     name : "Vishwajeet Raj",
     loc : "Patna",
     age : 23

}

function getLocation(location) {
    if(location) {
        return location;
    }
    return 'Unknown';
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.loc)}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
