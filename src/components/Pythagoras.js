import React from 'react';

class Pythagoras extends React.Component {
    constructor() {
        super();
        this.state= {
            side1: '', 
            side2: '', 
            hypotenuse: '', 
            disabled1: false, 
            disabled2: false, 
            disabledhyp: false,
            result: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset() {
        this.setState({side1 : ''});
        this.setState({side2 : ''});
        this.setState({hypotenuse : ''});

        this.setState({result : ''});
        this.setState({disabled1 : false});
        this.setState({disabled2 : false});
        this.setState({disabledhyp : false});
    }
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});

        if((event.target.name == 'side1' && this.state.side2 != '') || 
            event.target.name == 'side2' && this.state.side1 != '')  {
            this.setState({disabledhyp : true});
        }

        else if((event.target.name == 'side1' && this.state.hypotenuse != '') ||
            (event.target.name == 'hypotenuse' && this.state.side1 != '')) {
            this.setState({disabled2 : true});
        }

        else if((event.target.name == 'side2' && this.state.hypotenuse != '') ||
            (event.target.name == 'hypotenuse' && this.state.side2 != '')) {
            this.setState({disabled1 : true});
        }

    }

    handleSubmit(event) {

        var side1 = this.state.side1;
        var side2 = this.state.side2;
        var hyp = this.state.hypotenuse;

        if(this.state.hypotenuse == '') {
            this.setState({result: 
                'Side 1 is ' + this.state.side1 + ', ' +
                'Side 2 is ' + this.state.side2 + ', and ' +
                'Hypotenuse is ' + Math.sqrt((side1*side1) + (side2*side2))});
        }
        else if (this.state.side2 == '') {
            this.setState({result: 
                'Side 1 is ' + this.state.side1 + ', ' +
                'Side 2 is ' + Math.sqrt((hyp*hyp) - (side1*side1)) + ', and ' +
                'Hypotenuse is ' + this.state.hypotenuse});
        } 
        else if (this.state.side1 == '') {
            this.setState({result: 
                'Side 1 is ' + Math.sqrt((hyp*hyp) - (side2*side2)) + ', ' +
                'Side 2 is ' + this.state.side2 + ', and ' +
                'Hypotenuse is ' + this.state.hypotenuse});
        }
        else {
            this.setState({result: 'Oops, you only need to enter 2 sides! I\'ll calculate the third one for you.'});
        }

        event.preventDefault();
    }

    render() {
        return (<div>
            <form onSubmit = {this.handleSubmit}>
                <p>
            Side 1: {'  '}
                    <input type="number" 
                        name= "side1"
                        value={this.props.side1}
                        disabled = {this.state.disabled1}
                        onChange = {this.handleChange}
                    />
                </p>
                <p>
            Side 2: {'  '}
                    <input type="number" 
                        name="side2"
                        value={this.props.side2}
                        disabled = {this.state.disabled2}
                        onChange = {this.handleChange}
                    />
                </p>
                <p>
            Hypotenuse: {'  '}
                    <input type="number" 
                        name="hypotenuse"
                        value={this.props.hypotenuse}
                        disabled = {this.state.disabledhyp}
                        onChange = {this.handleChange}
                    />
                </p>
                <input type="submit" value="Submit" className="btn btn-success"/>
                {'  '}
                <input type="reset" value="Clear" onClick={this.handleReset} className="btn btn-primary"/>
            </form>
            <p></p>
            <p>{this.state.result}</p>
        </div>);
    }
}

export default Pythagoras;