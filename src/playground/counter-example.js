class Counter extends React.Component {
  // Setting up React Component State
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // STEP 1: Set Up a Default State
    this.state = {
      count : 0
    };
  }

  componentDidMount(){
    const count = parseInt(localStorage.getItem('count'), 10);
    if(!NaN(count)){

      this.setState( () => ({count}));
    }

  }

  componentDidUpdate(prevProp, prevState){

    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  // STEP 3: Change the state based on an event.
  handleAddOne() {
    this.setState( (prevState) => {
      return {
        count : prevState.count + 1
      }
    });
    
  }
  handleMinusOne() {
    this.setState( (prevState) => {
      return {
        count : prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState( () => {
      return {
        count : 0
      };
    });
  }

  render() {
    return (
      <div>
      {/*Step 2: Render Default State */ }
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.querySelector('#app'));

// let count = 0;
// const addOne = () => {
//   count = count + 1;
//   renderCounterApp();
//    console.log('AddOne');
// }
// const MinusOne = () => {
//   count = count - 1;
//   renderCounterApp();

//    console.log('MinusOne');
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();

//    console.log('reset');
// }




// const renderCounterApp = () => {

//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={MinusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//     );

// ReactDOM.render(templateTwo, document.querySelector('#app'));


// };

// renderCounterApp();

