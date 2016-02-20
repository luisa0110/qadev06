/**
 * Created by mariaalcocer on 2/1/2016.
 */
/**
 * Creating anonymous functions
 */


    // arguments es un objeto de tipo array q almacena todos los parametros de una funcion
//var askQuestion = function(){
//  console.log('How are you?');
//};
//
//var sayHello = function(){
//    console.log('hello world');
//    askQuestion();
//};

    var name = 'maria';
/**
 * This function use a anonymous function
 * @param name string
 * @param cb anonymous function
 */
var sayHello3 = function(name,cb){
    if(arguments.length === 1){
        console.log('hello world everybody');
        cb('everybody');
    }
    console.log('hello world ' + name);
    cb(name);
};

sayHello3(name,function(name2){
    console.log('How are you? ' + name2);
});


//sayHello3(function(name2){
//    console.log('How are you? ' + name2);
//});
//// Auto executable functions
//
//function(){
//    var a = 2;
//    var b = 3;
//    var eq = a + b;
//    console.log('Sum  is ', eq);
//}
/**
 * auto-execute function
 */
(function(number1, number2){
        var a = number1;
        var b = number2;
        var eq = a + b;
        console.log('Sum  is ', eq);
})(5,8);

/**
 *
 * @param size
 */
var createTable = function(size){
    var tableEl = document.createElement('table');
    var tbodyEl = document.createElement('tbody');
    for(var i = 0; i < size; i++ )
    {
        var rowEl = document.createElement('tr');

        for(var j = 0; j < size; j++)
        {

            colEl = document.createElement('td');
            //add events
            colEl.innerHTML = 'cel-' + i + '-' + j;
            colEl.addEventListener('mouseover',mouseOverHandler );
            rowEl.appendChild(colEl);
        }



        tbodyEl.appendChild(rowEl);
    }
    tableEl.appendChild(tbodyEl);
    //or var boduOageb = document.body
    var bodyPage = document.getElementsByTagName('body')[0];
    bodyPage.appendChild(tableEl);
};

var mouseClickHandler = function(e){
    e.target.setAttribute('style','background:green; border:solid black');
    e.target.removeEventListener('click', mouseClickHandler);
    e.target.removeEventListener('mouseout', mouseOutHandler);
    e.target.removeEventListener('mouseover', mouseOverHandler);
}
var mouseOutHandler = function(e){
    e.target.setAttribute('style','background:yellow; border:solid black');
  //  e.target.removeEventListener('mouseout', mouseOutHandler);
    e.target.addEventListener('click', mouseClickHandler);
}

var mouseOverHandler = function(e){
    //e.target.innerText = '!!!';
    //console.log('hola');
    //e.target.style.background = 'pink';

    e.target.setAttribute('style','background:red; border:solid black');
   // e.target.removeEventListener('mouseover', mouseOverHandler);
    console.log(e.target);
    e.target.addEventListener('mouseout', mouseOutHandler);
}

/**
 * n esta funcions e carga primero el html
 * y lo que haya en la funcion se ejecuta despues
 */
window.onload = function(){
    createTable(3);
};



