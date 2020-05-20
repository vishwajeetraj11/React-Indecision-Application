
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options:[]
    }
    }

    handleDeleteOptions() {
      this.setState( () => {
        return {
          options: []
        };
      });
    }

    handlePickOption() {
      const index = Math.floor(Math.random() * this.state.options.length);
      console.log(this.state.options[index]);
    }

    handleAddOption(option) {

      if(!option){
        return 'Please Enter a Valid Option!';
      }else if(this.state.options.includes(option)){
        return 'This item already Exists!'
      }

      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  render() {

    const title = 'Indecision Application';
    const subtitle = 'Put your life in the hands of the computer';
    const options = ['One', 'Two', 'Three'];

    return (
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action 
        optionsLength={this.state.options.length}
        handlePickOption={this.handlePickOption}
        />
      <Options 
        options={this.state.options}
        deleteAll = {this.handleDeleteOptions}
        />
      <AddOption handleAddOption={this.handleAddOption}/>
     
      </div>
    );
  }
}


const Header = (props) => {  
    return (
      <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      </div>
    );
}

const Action = (props) => {
  return (
    <div>
    <button
      onClick={props.handlePickOption}
      disabled={!props.optionsLength}
    >
    What Should I do ?
    </button>
    </div>
  )
}


const Options = (props) => {
  return (
    <div>
    <button onClick={props.deleteAll}>Remove All</button>
      {
        props.options.map( (element) => <Option key={element} elementText={element}/>)
      }
      <Option />
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
   {props.elementText}
    </div>
  );
}



class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      error: undefined
    }
    }
  handleFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
  
    e.target.elements.option.value ='';
    
    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
       <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
       </form>
      </div>
    );
  }
}




ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

console.log(222)