/*
  demo basic JavaScript 
  Team: Briasha
  Dasha and Brian
  SoftDev1 pd0
  K15 -- DOMinating JS
  2017-12-11m
*/

var additem = function(){ //add items if button is clicked
	var list = document.getElementById("thelist").getElementsByTagName("li");
	var newNum = list.length;
	var newElem = document.createElement("li");
	newElem.innerHTML = "item "+newNum; //adds an item w text based on list length
	newElem.addEventListener("mouseover",modHeader);
	newElem.addEventListener("mouseout",modNormal);
	newElem.addEventListener("click",itemRemove);
	var thelist = document.getElementById("thelist");
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

var wow = document.getElementById("b");
wow.addEventListener('click', additem);

