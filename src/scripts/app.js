import React from 'react';
import {render} from 'react-dom';
import PollContainer from '../containers/PollContainer.js';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from '../containers/App.js';
import AboutUsContainer from '../containers/AboutUsContainer';
import AssignmentsContainer from '../containers/AssignmentsContainer';

const router = (
    <Router history = {browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={PollContainer} />
            <Route path = "/about" component={AboutUsContainer} />
            <Route path = "/assignments" component={AssignmentsContainer} />>
        </Route>
    </Router>
);

render(router, document.getElementById('app'));




// commenting rather than deleting for future study
// ReactDOM.render(<PollContainer />, document.getElementById('app'));

// var date = new Date();
// var hour = date.getHours();
//
//import * as sayHello from './sayHello.js';
//
// window.addEventListener('load', () => {
// document.getElementById('welcome-message').innerHTML = sayHello.greet('Chris');
// });

// console.log(sayHello.greet('Your name'));
// document.getElementById('welcome-message').innerHTML = sayHello.greet('Your name', hour);
