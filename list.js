var additem = function(){
	var list = document.getElementById("thelist").getElementsByTagName("li");
	var newNum = list.length;
	var newElem = document.createElement("li");
	newElem.innerHTML = "item "+newNum;
	newElem.addEventListener("mouseover",modHeader);
	newElem.addEventListener("mouseout",modNormal);
	newElem.addEventListener("click",itemRemove);
	var thelist = document.getElementById("thelist");
	thelist.appendChild(newElem);
};

var modHeader = function(header)
{
	var header = document.getElementById("h");	
	header.innerHTML = this.innerHTML;
}

var modNormal = function()
{
	var header = document.getElementById("h");	
	header.innerHTML = "Hello World!";
}

var itemRemove = function()
{
	//var list = document.getElementById("thelist").getElementsByTagName("li");
	this.parentNode.removeChild(this);
}

var list = document.getElementById("thelist").getElementsByTagName("li");
for (var i = 0; i < list.length; i++)
{
	list[i].addEventListener("mouseover",modHeader);
	list[i].addEventListener("mouseout",modNormal);
}

var wow = document.getElementById("b");
wow.addEventListener('click', additem);

