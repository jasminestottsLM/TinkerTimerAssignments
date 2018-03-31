const hobbies = [{ name:'reading', years:20}, {name:'videogames', years:10}, {name:'knitting', years:2}];

hobbies.sort(function(a,b) {
    return a.years-b.years;
});

console.log(hobbies);