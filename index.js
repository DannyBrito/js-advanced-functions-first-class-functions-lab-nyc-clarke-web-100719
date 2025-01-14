// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(value){return value * num };
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function(drivers,fn){
    return fn(drivers);
}