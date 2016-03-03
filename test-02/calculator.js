/**
 * Created by mariaalcocer on 3/3/2016.
 */
var Calculator = function(){

};

Calculator.prototype.draw = function(){
    this.createCalc();
};

Calculator.prototype.createCalc = function(){
    var index = 0;
    var valuesCal = ['7','8','9','C','4','5','6','/','1','2','3','*','0','=','-','+']
    var divEl = $('<div id="content-calc"></div>');

    var inputEl = $('<input id="value-cal" type="text" value="0" autofocus><br>');
    divEl.append(inputEl);
    //var tableEl = $('<table></table>');
    for(var i = 0; i < 4; i++){
        var rowEl = $('<div></div>');
        for(var j = 0; j < 4; j++){
            var colEl = $('<button type="button">' + valuesCal[index] + '</button>');
            colEl.on('click',this.clickNumber);
            rowEl.append(colEl);
            index++;
        }
        divEl.append(rowEl);
       // tableEl.append(rowEl);
    }


    $('body').append(divEl);
};

Calculator.prototype.clickNumber = function(){
    $('#value-cal').attr('value','a' );
}

var calculator = new Calculator();
calculator.draw();