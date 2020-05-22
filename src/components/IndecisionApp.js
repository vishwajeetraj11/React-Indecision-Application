import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentWillUnmount() {
    // this fires just before your component goes away
    console.log("copmponentWillUnmount");
  }

  handleClearSelected = () => {
    this.setState( () => ({
      selectedOption: undefined
    }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  };

  handlePickOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[index];
    this.setState( () => ({ 
      selectedOption: option
     }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Please Enter a Valid Option!";
    } else if (this.state.options.includes(option)) {
      return "This item already Exists!";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      // 1st time component is mounted on the DOM
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // Do nothing at all if json data is invalid
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Inside this predefined lifecycle method
    // we have acces to previous this.state, this.props
    // previous props 1st argument
    // previous state 2nd argument

    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const subtitle = "Put your life in the hands of the computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          optionsLength={this.state.options.length}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          deleteAll={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal 
        selectedOption={this.state.selectedOption}
        handleClearSelected={this.handleClearSelected}
        />      
        </div>
    );
  }
}

export default IndecisionApp;
