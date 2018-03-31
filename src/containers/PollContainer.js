import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollSubmitButton from '../components/PollSubmitButton';
import RadioButtonGroup from '../components/RadioButtonGroup';
import CurrentChoice from '../components/CurrentChoice';
import $ from 'jquery';

class PollContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            questions: [],
            choices: [],
            checkedValuesArray: [],
            correctAnswersArray: [],
            choiceFeedback: ''
        };

        this.setCheckedValue = this.setCheckedValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    setCheckedValue(name, value) {
        var newCheckedValues = this.state.checkedValuesArray;
        newCheckedValues[name] = value;

        this.setState({
            checkedValuesArray: newCheckedValues
        });
        
    }

    submitForm(e) {
        if(this.state.checkedValuesArray[0] == this.state.correctAnswersArray[0]
        && this.state.checkedValuesArray[1] == this.state.correctAnswersArray[1]) {
            this.setState({
                choiceFeedback: 'You have great taste!'
            });
        } else {
            this.setState({
                choiceFeedback: 'I disagree!'
            });
        }

        e.preventDefault();
    }

    render() {
        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        //cycles through the array of questions and creates a new div based on each
            //the next line is an example of destructuring
        var {questions, checkedValuesArray} = this.state;     
        var questionsOutput = questions.map(function(question, questionNumber){
            return (
                <div key= {`question-number-${questionNumber}`}>
                    <PollQuestion text= {question.question} />
                    <RadioButtonGroup
                        name= {questionNumber}
                        checkedValue= {checkedValuesArray[questionNumber]}
                        choices= {question.choices}
                        onChange= {this.setCheckedValue} />
                        
                        Your choice is: {checkedValuesArray[questionNumber]}
                </div>
            );
        }.bind(this));

        this.state.correctAnswersArray = questions.map(function(question){
            return question.correctAnswer;
        });

        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text= {this.state.header}/>
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-5 col-sm-offset-4">
                        <form onSubmit={this.submitForm}>
                            {questionsOutput}
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>
                <CurrentChoice choiceFeedback={this.state.choiceFeedback}/>
            </div>
        );
    }

    componentWillMount() {
        console.log('componentWillMount()');
    }

    componentDidMount() {
        console.log('componentDidMount()');
        this.serverRequest = 
            $.get('http://localhost:8080/data/data.json',
                function (result) {
                    this.setState({
                        header: result.poll.header,
                        questions: result.poll.questions,
                    });
                }.bind(this));
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate()');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    componentDidCatch(error, info) {
        console.log('caught error ' + error + info);
    }
}

export default PollContainer;

