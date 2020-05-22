
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
    }

    componentDidMount(){
      try{

        // 1st time component is mounted on the DOM
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if(options) {
          this.setState( () => ({options}));
        }
      }catch(error) {
        // Do nothing at all if json data is invalid
      }

    }
  

    componentDidUpdate(prevProps, prevState) {

      // Inside this predefined lifecycle method 
      // we have acces to previous this.state, this.props
      // previous props 1st argument
      // previous state 2nd argument

      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    
      }
    }

    componentWillUnmount() {
      // this fires just before your component goes away
      console.log('copmponentWillUnmount');
    }

    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove){
      this.setState( (prevState) => ({
        options: prevState.options.filter((option) => option !== optionToRemove)
      }));
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
      this.setState( (prevState) => ({options: prevState.options.concat(option)}));
    }


  render() {

    const subtitle = 'Put your life in the hands of the computer';

    return (
      <div>
      <Header subtitle={subtitle}/>
      <Action 
        optionsLength={this.state.options.length}
        handlePickOption={this.handlePickOption}
        />
      <Options 
        options={this.state.options}
        deleteAll = {this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
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
      {props.subtitle && <h2>{props.subtitle}</h2> }
      </div>
    );
}

Header.defaultProps = {
  title: 'Indecision App'
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
    {props.options.length === 0 && <p>Please Add an Option to get Started!</p>}
      {
        props.options.map( (element) => (
          <Option 
          key={element} 
          elementText={element}
          handleDeleteOption={props.handleDeleteOption}
          />)
        )
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
   {props.elementText}
   <button 
   onClick={() => {
     props.handleDeleteOption(props.elementText);
   }}
   >
   Remove
   </button>
    </div>
  );
};



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
    
    this.setState(() => ({ error }));

    if(!error) {
      e.target.elements.option.value ='';
    }
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