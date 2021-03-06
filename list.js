/*
  demo basic JavaScript 
  Team: Briasha
  Dasha and Brian
  SoftDev1 pd0
  K15 -- DOMinating JS
  2017-12-11m
*/

var additem1 = function(){
    additem("thelist", list_length("thelist"));
};

var additem_fib = function(){
    additem("thelist2", fibonacci(list_length("thelist2")));
};

var additem_fact = function(){
    additem("thelist4", factorial(list_length("thelist4")));
}
var additem_catalan = function(){
    var wow = list_length("thelist3");
    var catalan_num = factorial(2 * wow);
    catalan_num = catalan_num / (factorial(wow + 1) * factorial(wow))
    additem("thelist3", catalan_num);
};

var list_length = function(listz){
    var list = document.getElementById(listz).getElementsByTagName("li");
    var newNum = list.length;
    return newNum;
};


var additem = function(name, funct){ //add items if button is clicked
    var newElem = document.createElement("li");
    newElem.innerHTML = funct; //adds an item w text based on list    
    newElem.addEventListener("mouseover",modHeader);
    newElem.addEventListener("mouseout",modNormal);
    newElem.addEventListener("click",itemRemove);
    var thelist = document.getElementById(name);
    thelist.appendChild(newElem);
};

var modHeader = function(header) //changes header to specified word.
{
    var header = document.getElementById("h");	
    header.innerHTML = this.innerHTML;
}

var modNormal = function() //changes header back to hello world
{
    var header = document.getElementById("h");	
    header.innerHTML = "Hello World!";
}

var itemRemove = function() //removes clicked on item
{
    //var list = document.getElementById("thelist").getElementsByTagName("li");
    this.parentNode.removeChild(this);
}

var list = document.getElementById("thelist").getElementsByTagName("li");
for (var i = 0; i < list.length; i++)
{
    list[i].addEventListener("mouseover",modHeader);
    list[i].addEventListener("mouseout",modNormal);
    list[i].addEventListener("click",itemRemove);
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~helper fxns~~~~~~~~~~~~~~~~~~~~~~~*/
var fibonacci = function(){
    var list = document.getElementById("thelist2").getElementsByTagName("li");
    if(list.length == 0 || list.length ==1){
	return 1;
    }
    return parseInt(list[list.length-1].innerHTML) + parseInt(list[list.length -2].innerHTML);
};

var factorial = function(n){
    if (n == 1 || n == 0){
        return 1;
    }
    return n * factorial(n-1);
}

var wow = document.getElementById("b");
wow.addEventListener('click', additem1);
var wow2 = document.getElementById("b2");
wow2.addEventListener('click', additem_fib);
var wow3 = document.getElementById("b3");
wow3.addEventListener('click', additem_catalan);
var wow4 = document.getElementById("b4");
wow4.addEventListener('click', additem_fact);