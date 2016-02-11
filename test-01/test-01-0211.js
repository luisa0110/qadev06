/**
 * Created by mariaalcocer on 2/11/2016.
 */
var JSTest = function (){
    //this.executionFunctions(num, parag);
};
//JSTest.prototype.executionFunctions = function (num, parag, letter){
//    //console.log('The number entered is: ' + num);
//    //console.log('The paragraph entered is: ' + parag);
//    //console.log('===========FIRST PRIME NUMBERS ' + num + '==============');
//    //this.getPrimeNumbers(num);
//    //console.log('=====================FACTORIAL======================');
//    //var factorial = this.getFactorial(num);
//    //console.log(factorial);
//    //console.log('===================COUNT VOWELS======================');
//    //var countVowels = this.countVowels(parag);
//    //console.log('TOTAL VOWEL A ==> '+ countVowels[0]);
//    //console.log('TOTAL VOWEL E ==> '+ countVowels[1]);
//    //console.log('TOTAL VOWEL I ==> '+ countVowels[2]);
//    //console.log('TOTAL VOWEL O ==> '+ countVowels[3]);
//    //console.log('TOTAL VOWEL U ==> '+ countVowels[4]);
//    //this.evalParagraph(parag, letter);
//};
//getPrimeNumbers: Which prints the first N ‘prime’ numbers (N is a value provided by the user)

JSTest.prototype.getPrimeNumbers = function(number){
    var num = 1;
    do{
        if(this.isPrime(num)){
            console.log(num);
            number--;
            num++;
        }
        else{
            num++;
        }

    }while(number > 0);
};

JSTest.prototype.isPrime = function(num){
    if(num === 1){
        return true;
    }
    else{
        var count = 0;
        var auxNum = num;
        do{
            if (auxNum%num === 0)
                count++;
            num--;
        } while(num > 0);
        return count === 2 ? true: false;
    }
};

//getFactorial: Which calculates the factorial of a given number (number provided by the user).
 JSTest.prototype.getFactorial = function (number){
     var fact = 1;
     for(var i = 1; i <= number; i++){
         fact = fact * i;
     }
     return fact;
 };

//countVowels: Which counts the number of vowels ‘a’, ‘e’, ‘i’, ‘o’ and ‘u’ that a given paragraph
//has (paragraph provided by the user).

JSTest.prototype.countVowels = function(paragraph){
    countVo = [];
    countA = 0;
    countE = 0;
    countI = 0;
    countO = 0;
    countU = 0;
    pargrap = paragraph.toLowerCase();
    for(var i = 0; i <= pargrap.length; i++){
        switch (pargrap[i]){
            case 'a':
                countA++;
                break;
            case 'e':
                countE++;
                break;
            case 'i':
                countI++;
                break;
            case 'o':
                countO++;
                break;
            case 'u':
                countU++;
                break;
        }
    }
    countVo.push(countA);
    countVo.push(countE);
    countVo.push(countI);
    countVo.push(countO);
    countVo.push(countU);
    return countVo;
};
//evalParagraph: Which, given a long paragraph and a letter/char provided by the user, print the
//count and all the words that contain the specified char.
//    Example. var paragraph = ‘hello world’;
//var letter = ‘h’;
//? Count is: 1
//? Words: hello

JSTest.prototype.evalParagraph = function (paragraph, letter){
    var count = 0;
    var paragr = paragraph.split(' ');
    for(var i = 0; i < paragr.length; i++){
        if(this.findLetter(paragr[i], letter)){
            count++;
            console.log('Word: ' + paragr[i]);
        }
    }
    count === 0? console.log('Not found word with that letter'): console.log('Count is: '+count);
};
JSTest.prototype.findLetter = function (word, letter){
    for(var i = 0; i < word.length; i++){
        if(word[i] === letter)
            return true;
    }
    return false;
};