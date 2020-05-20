
class IndecisionApp extends React.Component {
  render() {

    const title = 'Indecision Application';
    const subtitle = 'Put your life in the hands of the computer';
    const options = ['One', 'Two', 'Three'];

    return (
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action />
      <Options options={options}/>
      <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    
    return (
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  handlePick() {
    alert('Pick Handle');
  }
  render() {
    return (
      <div>
      <button onClick={this.handlePick}>What should I do ?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    console.log(this.props.options);
    alert('Removed All');
  }
  render() {

    return (
      <div>
      <button onClick={this.removeAll.bind()}>Remove All</button>
        {this.props.options.length}
        {
          this.props.options.map( (element) => <Option key={element} elementText={element}/>)
        }
          <Option />
        
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    
    return (
      <div>
     {this.props.elementText}
      </div>
    );
  }
}



class AddOption extends React.Component {

  handleFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){

      console.log(option);
    }
  }

  render() {
    return (
      <div>
       <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
       </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));