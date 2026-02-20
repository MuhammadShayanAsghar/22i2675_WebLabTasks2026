// Task 1

var l = [4500, 6200, 5800, 7100, 4900, 8300, 6700];

function addSteps(dayIndex, steps) {
    l.splice(dayIndex, 0, steps);
    console.log("steps added, ",steps);
}
addSteps(0,4000);

function getHighestSteps() {
    //let max = 0, current = 0;
    let highest = l.reduce((max, current) => current > max ? current : max, l[0]);
    console.log("Highest is, ",highest);
}

getHighestSteps();

function getLowestSteps() {
    //let max = 0, current = 0;
    let lowest = l.reduce((max, current) => current < max ? current : max, l[0]);
    console.log("Lowest is, ",lowest);
}

getLowestSteps();

function getAverageSteps() {
    //let max = 0, current = 0;
    let total = l.reduce((total, current) => total + current, 0);
    let size = l.reduce((total) => total + 1, 0);
    //console.log(size);
    console.log("Average is, ",total/size);
}
getAverageSteps();

function getAboveAverageDays() {
    let total = l.reduce((total, current) => total + current, 0);
    let size = l.reduce((total) => total + 1, 0);
    let average = total/size;
    let aboveAve = l.filter(val=>val>average);
    console.log("Above average days are, ",aboveAve);
}
getAboveAverageDays();
console.log(l);

//-----------------

