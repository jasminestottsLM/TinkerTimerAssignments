import React from 'react';
import TestUtils from 'react-dom/test-utils';
import SayHello from '../src/scripts/SayHello.js';

describe('Greet', function() {
    it('renders without problems', function () {
        const sayhello = TestUtils.renderIntoDocument(<SayHello />);
        expect(sayhello).toEqual(jasmine.anything());
    });
});



// commented out to save for later study
//
// var sayHello = require('../src/scripts/sayHello.js');

// describe('Greeting', function() {

//     it('returns Please login if no name is provided', function() {
//         var actual = sayHello.greet();
//         var expected = 'Please login';
//         expect(actual).toEqual(expected);
//     });

//     it('Says good morning if it is before noon', function() {
//         var actual = sayHello.greet('World', 11);
//         var expected = 'Good morning, World';
//         expect(actual).toEqual(expected);
//     });

//     it('Says good afternoon after noon and before 6pm', function() {
//         var actual = sayHello.greet('World', 14);
//         var expected = 'Good afternoon, World';
//         expect(actual).toEqual(expected);
//     });

//     it('Says good evening if it is after 6pm', function() {
//         var actual = sayHello.greet('World', 20);
//         var expected = 'Good evening, World';
//         expect(actual).toEqual(expected);
//     });

//     it('concats Hello and an input name', function() {
//         var actual = sayHello.greet('World', 12);
//         var expected = 'Hello, World';
//         expect(actual).toEqual(expected);
//     });
// });