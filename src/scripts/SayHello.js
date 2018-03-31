import React from 'react';

class SayHello extends React.Component {
    render() {
        return (<h1>Hello, {this.props.name}</h1>);
    }
}

export default SayHello;


// commented out but saved to study later
//
// export let greet = (name, time) => {
//     var message = '';
//     if(name==null || name==undefined) {
//         return 'Please login';
//     }
//     else if(time < 12) {
//         message += 'Good morning, ';
//     } 
//     else if(time > 12 && time < 18) {
//         message += 'Good afternoon, ';
//     } 
//     else if(time > 18 && time < 24) {
//         message += 'Good evening, ';
//     }
//     else {
//         message += 'Hello, ';
//     }
//     return message + name;
// };
