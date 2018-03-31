import React from 'react';
import Pythagoras from '../components/Pythagoras.js';
import Palindrome from '../components/Palindrome.js';

class AssignmentsContainer extends React.Component {
    constructor() {
        super();
    }   

    render() {
        var rowstyle = {
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        return <div classname='assignmentsrow' style={rowstyle}>
            <div>
                <h2>Pythagorean Theorem</h2>
                <p>Enter the two known sides of your triangle in the fields below.</p>
                <Pythagoras />
            </div>
            <div>
                <h2>Palindrome</h2>
                <p>Enter text in the field below to check whether it is a palindrome.</p>
                <Palindrome />
            </div>
        </div>;
    }
}

export default AssignmentsContainer;
