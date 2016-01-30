/**
 * Created by mariaalcocer on 1/25/2016.
 */
function Calculator(){
}
/**
 * This function is to calculate maximun, minimum, average and sum
 */
Calculator.prototype.doOperations = function(){
    if(arguments.length !== 0){
        console.log('The Max number is '+this.getMaxNumber(arguments));
        console.log('The MIN number is '+ this.getMinNumber(arguments));
        console.log('The AVERAGE is', this.getAvgNumber(arguments));
        console.log('The SUM is', this.getSumNumber(arguments));
    }

    else
        console.log("There is not values entered");
};

/**
 * This function is to get the max number
 * @returns {max number}
 */
Calculator.prototype.getMaxNumber = function(){
    function getMax (collection, size, major){
        var max = major;
        if(size > 0){
            if(max < collection[size]){
                max = collection[size];
                return getMax(collection, size - 1, max);
            }
            return getMax(collection, size - 1, max);
        }
        return (max < collection[size])? collection[size]:max;
    }
    if(arguments.length  === 0)
        console.log("There is not values entered");
    else{
        if(arguments.length ===1){
            if(typeof(arguments[0])=="number")
                console.log('The Max number is '+getMax(arguments, arguments.length - 1,arguments[arguments.length - 1]));
            return getMax(arguments[0], arguments[0].length - 1,arguments[0][arguments[0].length - 1]);
        }
        else
            console.log('The Max number is '+ getMax(arguments, arguments.length - 1,arguments[arguments.length - 1]));
    }
};

/**
 * This function is to calculate the sum
 * @returns {the total sum}
 */
Calculator.prototype.getSumNumber = function(){
    function getSum (collection, size){
        return (size > 0)? collection[size] + getSum(collection,size-1):collection[size];
    }
    if(arguments.length  === 0)
        console.log("There is not values entered");
    else{
        if(arguments.length ===1){
            if(typeof(arguments[0])=="number")
                console.log('The Sum is '+getSum(arguments, arguments.length - 1));
            return getSum(arguments[0], arguments[0].length - 1);
        }
        console.log('The Sum is '+ getSum(arguments, arguments.length - 1));
    }
};

/**
 * This function is to get the min number
 * @returns {min}
 */
Calculator.prototype.getMinNumber = function(){
    function getMin (collection, size, minor){
        var min = minor;
        if(size > 0){
            if(min > collection[size]){
                min = collection[size];
                return getMin(collection, size - 1, min);
            }
            return getMin(collection, size - 1, min);
        }
        return (min < collection[size])?min: collection[size];
    }
    if(arguments.length  === 0)
        console.log("There is not values entered");
    else{
        if(arguments.length ===1){
            if(typeof(arguments[0])=="number"){
                console.log('The Min number is '+getMin(arguments, arguments.length - 1,arguments[arguments.length - 1]));
            }
            return getMin(arguments[0], arguments[0].length - 1,arguments[0][arguments[0].length - 1]);
        }
        console.log('The Min number is '+ getMin(arguments, arguments.length - 1,arguments[arguments.length - 1]));
    }
};

/**
 * This function is to calculate the average
 * @returns {average}
 */
Calculator.prototype.getAvgNumber = function(){
    function getAvg (collection, size){
        if(size == collection.length -1 )
            return (collection[size] + getAvg(collection,size-1))/ collection.length;
        else{
            return (size > 0)?collection[size] + getAvg(collection,size-1):collection[size];
        }
    }
    if(arguments.length  === 0)
        console.log("There is not values entered");
    else{
        if(arguments.length ===1){
            if(typeof(arguments[0])=="number"){
                console.log('The Average is '+getAvg(arguments, arguments.length - 1,arguments[arguments.length - 1]));
            }return getAvg(arguments[0], arguments[0].length - 1,arguments[0][arguments[0].length - 1]);
        }
        console.log('The Average is '+ getAvg(arguments, arguments.length - 1,arguments[arguments.length - 1]));
    }
};




