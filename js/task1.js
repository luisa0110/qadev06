/**
 * Created by mariaalcocer on 1/25/2016.
 */
function Calculator(){
    this.major = 0;
}
Calculator.prototype.doOperations = function(){
    var number = arguments;
    console.log('MAX is', this.getMaxNumber(number));
    //console.log('MIN is', getMinNumber());
    //console.log('AVERAGE is', getAvgerage());
    //console.log('SUM', getSum());
};

Calculator.prototype.getMaxNumber = function(numbers){
    var collection =[];
    collection = numbers;
    Calculator.prototype.getMax = function(collection, size, max){
        var major = majorNumber;
        if(size >= 0) {
            if(major > collection[cant-1])
            {

                return this.getMax(collection, cant - 1, major)
            }
            else
            {
                major = collection[cant-1];
                return this.getMax(collection, cant - 1, collection[cant-1])
            }
        }
        else
        {
            return major;
        }
    }
    return var Max = this.getMax(collection, collection.length - 1, collection[collection.length - 1]);
};


var getMenor = function(collection, cant, mini){
    if (mini == 0)
    {
        var menor = collection[cant-1];
    }
    else
    {
        var menor = mini;
    }
    if(cant > 0) {
        if(menor < collection[cant-1])
        {

            return getMenor(collection, cant - 1, menor)
        }
        else
        {
            menor = collection[cant-1];
            return getMenor(collection, cant - 1, collection[cant-1])
        }
    }
    else
    {
        return menor;
    }

};


