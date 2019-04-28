import React from 'react';
import './data.scss';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    render() {
        return (
            <div className="data-row">
                <p className="data-row__text">{this.props.text}</p>
                <input
                    onChange={this.props.changed}
                    value={this.props.value}/>
            </div>
        )
    }
}

export default Data;