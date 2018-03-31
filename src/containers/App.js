import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return(
            <div>
                <ul className="nav nav-pills">
                    <li role="presentation"><Link to="/">Home</Link></li>
                    <li role="presentation"><Link to="about">About Me</Link></li>
                    <li role="presentation"><Link to="assignments">Tinker Time Assignments</Link></li>
                </ul>
                <div>
                    {/* {this.props.children} */}
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        );
    }
}

export default App;