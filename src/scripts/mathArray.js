exports.minMaxAvg = function minMaxAvg(numberArray) {
    if(!numberArray) {
        return 'Your array is empty';
    }

    const findMax = (maximum, currentNumber) => {
        if(currentNumber > maximum) {
            maximum = currentNumber;
        }
        return maximum;
    };

    const findMin = (minimum, currentNumber) => {
        if(currentNumber < minimum) {
            minimum = currentNumber;
        }
        return minimum;
    };

    const reducer = (total, currentNumber) => total + currentNumber;
    
    try {
        const max = numberArray.reduce(findMax);
        const min = numberArray.reduce(findMin);
        const sum = numberArray.reduce(reducer);
        const avg = sum / numberArray.length;
        console.log({min, max, avg});
        if (min && max && avg) {
            return {min, max, avg};
        } 
        else {
            throw new Error('error');
        } 
    } 
    catch(error) {
        return 'There has been a problem with the program.  Please check that you have provided an array of numbers.';
    }
};


// short version:
// return [Math.max(...array), Math.min(...array), array.reduce((a,b) => a + b) / array.length];
// expanded here for my own practice