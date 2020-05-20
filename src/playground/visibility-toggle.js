
const  visibilityToggle = () => {
    visibility = !visibility;
    render();
  };
  
  // const check = () => {
  
    let visibility = false;
  
  // }
  
  const render = () => {
    const template = (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={visibilityToggle}> {visibility ? 'Hide Details' : 'Show Details'}</button>
       {
         visibility && (<div><p>{text}</p></div>)
       }
        </div>
    );
    ReactDOM.render(template, appRoot);
  };
  
  render();
  