class Visibility extends React.Component {
   constructor(props) {
     super(props);
    this.handleVisibility = this.handleVisibility.bind(this);


     this.state = {
       visibility : false,
       text : 'This is the some detail'
     }
   }

   handleVisibility() {
    this.setState( (prevState) => {
      return {
        visibility : !prevState.visibility
      };
    });
   }

  render() {
    
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && (<p>{this.state.text}</p>)}
      </div>
      );
  }
}

ReactDOM.render(<Visibility />, document.querySelector('#app'));


// const  visibilityToggle = () => {
//     visibility = !visibility;
//     render();
//   };
  
//   // const check = () => {
  
//     let visibility = false;
  
//   // }

//   const text = 'This is some detail';
  
//   const render = () => {
//     const template = (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={visibilityToggle}> {visibility ? 'Hide Details' : 'Show Details'}</button>
//        {
//          visibility && (<div><p>{text}</p></div>)
//        }
//         </div>
//     );
//     ReactDOM.render(template, document.querySelector('#app'));
//   };
  
//   render();
  