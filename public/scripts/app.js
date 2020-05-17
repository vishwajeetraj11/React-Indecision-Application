'use strict';

console.log("App.js is running");

// JSX - Javascript XML
var app = {
  title: 'Indecision Application',
  subtitle: 'Put your lives in the hands of computer'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

var user = {
  name: "Vishwajeet Raj",
  loc: "Patna",
  age: 23

};

function getLocation(location) {
  if (location) {
    return location;
  }
  return 'Unknown';
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation(user.loc)
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
