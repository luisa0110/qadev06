/**
 * Created by mariaalcocer on 2/11/2016.
 */
//Create a separate file which has an auto-executable function in order to run all methods (all
//4 above exercises) from JSTest class
(function(){
    var number = prompt("Please enter a number");
    var paragraph = prompt("Please enter a paragraph");
    var letter = prompt("Please enter a letter for the search");
    var calculation = new JSTest();
    console.log('The number entered is: ' + number);
    console.log('===========FIRST PRIME NUMBERS ' + number + '==============');
    calculation.getPrimeNumbers(number);
    console.log('=====================FACTORIAL======================');
    var factorial = calculation.getFactorial(number);
    console.log(factorial);
    console.log('The paragraph entered is: ' + paragraph);
    console.log('The letter for search is: ' + letter);
    console.log('===================COUNT VOWELS======================');
    var countVowels = calculation.countVowels(paragraph);
    console.log('TOTAL VOWEL A ==> '+ countVowels[0]);
    console.log('TOTAL VOWEL E ==> '+ countVowels[1]);
    console.log('TOTAL VOWEL I ==> '+ countVowels[2]);
    console.log('TOTAL VOWEL O ==> '+ countVowels[3]);
    console.log('TOTAL VOWEL U ==> '+ countVowels[4]);
    calculation.evalParagraph(paragraph, letter);

})();
