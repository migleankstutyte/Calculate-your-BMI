import React, {Component} from 'react';
import './App.scss';
import Title from './Title/Title';
import Data from './Data/Data';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Your name",
            height: "0.00",
            weight: 0,
            bmi: "-",
            bmiClass: "-"
        }

        this.nameChangedHandler = this.nameChangedHandler.bind(this);
        this.submitClickHandler = this.submitClickHandler.bind(this);
    }

    // defaultState = () => {
    //     return {
    //         placeholder: [
    //             {
    //                 name: "Your name",
    //                 height: "0.00",
    //                 weight: 0,
    //                 bmi: "",
    //                 bmiClass: ""
    //             },
    //         ]
    //     };
    // }

    // handleSubmit = (event) => {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    //     console.log("Calculate")
    // }

    submitClickHandler(event) {
        alert('Your favorite flavor is: ' + this.state.name);
        console.log("Calculate");

    }

    nameChangedHandler = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event.target.value);
    }

    reset = () => {
        this.setState(this.baseState)
        console.log("reset");
    }

    render() {
        return (
            <div className="App">
                {/*<Title/>*/}
                <div className="container">
                    <Data
                        type="text"
                        text="Insert name:"
                        value={this.state.name}
                        // placeholder={this.state.placeholder[0].name}
                        changed={this.nameChangedHandler}/>
                    <Data
                        type="number"
                        text="Your height:"
                        value={this.state.height}
                        // placeholder={this.state.placeholder[0].height}
                        changed={this.nameChangedHandler}/>
                    <Data
                        type="number"
                        text="Your weight:"
                        value={this.state.weight}
                        // placeholder={this.state.placeholder[0].weight}
                        changed={this.nameChangedHandler}/>
                    <div className="container__buttons">
                        <button type="submit" value="Submit" onClick={this.submitClickHandler}>Calculate</button>
                        <button onClick={this.reset}>Reset</button>
                    </div>
                    <p className="data-row__text">{this.state.name}</p>
                    <p className="data-row__text">Your BMI: {this.state.bmi}</p>
                    <p className="data-row__text">You are: {this.state.bmiClass}</p>
                </div>
            </div>
        );
    }
}

export default App;
