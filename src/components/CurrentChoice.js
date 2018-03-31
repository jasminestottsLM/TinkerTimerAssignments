import React from 'react';

class CurrentChoice extends React.Component {
    render() {
        return(<div>{this.props.choiceFeedback}</div>);
    }
}

export default CurrentChoice;