import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollContainer from '../src/containers/PollContainer.js';
import PollHeader from '../src/components/PollHeader.js';
import RadioButton from '../src/components/RadioButton.js';
import PollQuestion from '../src/components/PollQuestion.js';
import PollSubmitButton from '../src/components/PollSubmitButton.js';

describe('Poll', function() {
    it('header renders without problems', function () {
        const pollHeader = TestUtils.renderIntoDocument(<PollHeader />);
        expect(pollHeader).toEqual(jasmine.anything());
    });

    // it('question renders without problems', function () {
    //     const pollQuestion = TestUtils.renderIntoDocument(<PollQuestion />);
    //     expect(pollQuestion).toEqual(jasmine.anything());
    // });

    it('answer renders without problems', function () {
        const radioButton = TestUtils.renderIntoDocument(<RadioButton />);
        expect(radioButton).toEqual(jasmine.anything());
    });

    // it('submit button renders without problems', function () {
    //     const pollSubmitButton = TestUtils.renderIntoDocument(<PollSubmitButton />);
    //     expect(pollSubmitButton).toEqual(jasmine.anything());
    // });

});