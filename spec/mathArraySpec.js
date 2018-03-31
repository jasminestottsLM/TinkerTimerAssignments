var mathArray = require('../src/scripts/mathArray.js');

describe('mathArray', function() {

    it('calculates the min, max, and average of an array', function() {
        var actual = mathArray.minMaxAvg([1,2,3]);
        var expected = {min: 1, max: 3, avg: 2};
        expect(actual).toEqual(expected);
    });

    it('returns Your array is empty if the array is empty', function() {
        var actual = mathArray.minMaxAvg();
        var expected = 'Your array is empty';
        expect(actual).toEqual(expected);
    });

    it('throws an exception when the array does not have numbers', function() {
        var actual = mathArray.minMaxAvg(['a',1,'b']);
        var expected = 'There has been a problem with the program.  Please check that you have provided an array of numbers.';
        expect(actual).toEqual(expected);
    });

    it('works with negative numbers', function() {
        var actual = mathArray.minMaxAvg([-1,2,5]);
        var expected = {min: -1, max: 5, avg: 2};
        expect(actual).toEqual(expected);
    });

    it('works with numbers that are not whole', function() {
        var actual = mathArray.minMaxAvg([0.5, 2, 3, 4]);
        var expected = {min: 0.5, max: 4, avg: 2.375};
        expect(actual).toEqual(expected);
    });
    
});