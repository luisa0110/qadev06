/**
 * Created by mariaalcocer on 1/25/2016.
 */
var doOperations = function(number){

    console.log('MAX is', getMaxNumber(number, arguments.length));
    console.log('MIN is', getMinNumber());
    console.log('AVERAGE is', getAvgerage());
    console.log('SUM', getSum());
};

var getMaxNumber = function(numbers, size){
    if(numbers[size-1]>numbers[size-2])
        return numbers[size-1];
};



