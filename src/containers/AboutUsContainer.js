import React from 'react';
import AboutUs from '../components/AboutUs.js';
import AboutContent from '../components/AboutContent.js';

class AboutUsContainer extends React.Component {
    constructor() {
        super();
    }   

    render() {
        var rowstyle = {
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        return <div classname='aboutrow' style={rowstyle}>
            <AboutUs />
            <AboutContent />
        </div>;
    }
}

export default AboutUsContainer;