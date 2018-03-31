import React from 'react';

class Palindrome extends React.Component {
    constructor() {
        super();
        this.state= {value: '', result: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reverseString = this.reverseString.bind(this);
    }

    reverseString() {
        var text = this.state.value.toLowerCase();
        return text.split('').reverse().join('');
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        var reversed = this.reverseString();
        var entry = this.state.value.toLowerCase().trim();
        if (entry == reversed) {
            this.setState({result: 'Yep, that\'s a palindrome!'});
        } else {
            this.setState({result: 'No, that\'s not a palindrome.'});
        }
        event.preventDefault();
    }

    render() {
        return (<div>
            <form onSubmit = {this.handleSubmit}>
                <input type="text" 
                    size = "50"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <p></p>
                <p>
                    <input type="submit" value="Submit" />
                </p>
            </form>
            <p>
                {this.state.result}
            </p>
        </div>);
    }
}

export default Palindrome;