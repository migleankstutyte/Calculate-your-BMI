import React, { Component } from "react";
import "./App.scss";
import Title from "./Title/Title";
import Data from "./Data/Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState;

    this.nameChangedHandler = this.nameChangedHandler.bind(this);
    this.submitClickHandler = this.submitClickHandler.bind(this);
  }

  nameChangedHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  heightChangedHandler = event => {
    this.setState({
      height: event.target.value
    });
  };

  weightChangedHandler = event => {
    this.setState({
      weight: event.target.value
    });
  };

  submitClickHandler() {
    let bmiValue = (
      (this.state.weight / this.state.height / this.state.height) *
      10000
    ).toFixed(2);
    this.setState({
      name: this.state.name,
      bmi: bmiValue,
      bmiResult: this.getResult(bmiValue),
      shouldHide: false
    });
  }

  getResult = bmiValue => {
    if (bmiValue < 18.5) return "Underweight";
    if (bmiValue >= 18.5 && bmiValue <= 24.9) return "Normal Weight";
    if (bmiValue >= 25 && bmiValue <= 29.9) return "Overweight";
    if (bmiValue >= 30) return "Obese";
  };

  reset = () => {
    this.setState(this.defaultState);
  };

  defaultState = {
    name: "",
    height: "",
    weight: "",
    bmi: "",
    bmiResult: "",
    shouldHide: true
  };

  render() {
    return (
      <div className="App">
        <Title />
        <div className="container">
          <Data
            text="Insert your name:"
            value={this.state.name}
            changed={this.nameChangedHandler}
          />
          <Data
            text="Your height (cm):"
            value={this.state.height}
            changed={this.heightChangedHandler}
          />
          <Data
            text="Your weight (kg):"
            value={this.state.weight}
            changed={this.weightChangedHandler}
          />
          <div className="container__buttons">
            <button
              type="submit"
              value="Submit"
              onClick={this.submitClickHandler}
            >
              Calculate
            </button>
            <button onClick={this.reset}>Reset</button>
          </div>
          <div className="container__results">
            <div
              className={
                this.state.shouldHide ? "container__results-hidden" : "container__results-show"
              }
            >
              <div className="data-row">
                <p className="data-row__text--center">{this.state.name},</p>
              </div>
              <div className="data-row">
                <p className="data-row__text">Your BMI:</p>
                <span>{this.state.bmi}</span>
              </div>
              <div className="data-row">
                <p className="data-row__text">You are:</p>
                <span>{this.state.bmiResult}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
