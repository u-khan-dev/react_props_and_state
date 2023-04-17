import React from 'react';
import './Counter.css';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            val: 0
        };

        this.decrement = () => this.setState({ val: this.state.val - 1 });
        this.increment = () => this.setState({ val: this.state.val + 1 });
    }

    render() {
        return (
            <div className="counter">
                <p> Class Component </p>
                <div className="inner">
                    <div className="interactive">
                        <button className="btn" onClick={this.decrement}>
                            {'\u2212'}
                        </button>

                        <p> { this.state.val } </p>

                        <button className="btn" onClick={this.increment}>
                            {'\uff0b'}
                        </button>
                    </div>
                </div>
            </div>
        );

    }
}

export default CounterClass;