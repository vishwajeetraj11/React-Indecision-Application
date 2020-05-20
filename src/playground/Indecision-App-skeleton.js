console.log("App.js is running");

// JSX - Javascript XML
const app = {
  title: "Indecision Application",
  subtitle: "Put your lives in the hands of computer",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.option.value = "";  
    renderIndecisionApp();
  }
}

const user = {
  name: "Vishwajeet Raj",
  loc: "Patna",
  age: 24,
};

function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
  }
}
const appRoot = document.getElementById("app");
const removeAll = () => {
  // app.options = [];
  app.options.length = 0;
  renderIndecisionApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  console.log(app.options[randomNum]);
};

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p> }
      <p>{( app.options && app.options.length > 0) ? "Here Are Your Options" : "No Options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
      {app.options.map( (element) =>  <li key={element}>{element}</li>) }
      </ol>
      
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button> 
      </form>
      </div>
  );
  ReactDOM.render(template, appRoot);
};



let text = 'Show this Detail';

// renderIndecisionApp();


