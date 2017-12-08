var additem = function(){
	var list = document.getElementById("thelist").getElementsByTagName("li");
	var newNum = list.length;
	var newElem = document.createElement("li");
	newElem.innerHTML = "item "+newNum;
	newElem.addEventListener("mouseover",modHeader);
	var thelist = document.getElementById("thelist");
	thelist.appendChild(newElem);
};

var modHeader = function(header)
{
	console.log(this.innerHTML);
	console.log(header.innerHTML);
	header.innerHTML = this.innerHTML;
	/*
	console.log("Does work?");
	var replace = document.createElement('h1');
	replace.innerHTML = this.innerHTML;
	header.replaceChild(replace,header);
	*/
}

var changeheader = function(blah)
{
	var header = document.getElementById("h");
	var wow = document.createElement("h1");
	wow.innerHTML = blah;
	header.replaceChild(wow,header);
}

var list = document.getElementById("thelist").getElementsByTagName("li");
for (var entry of list.entries())
{
	entry.addEventListener("mouseover",modHeader);
	//entry.addEventListener("",modNormal);
}

var wow = document.getElementById("b");
wow.addEventListener('click', additem);
var header = document.getElementById("h");


//var wow2 = document.getElementById("h");
//document.getElementById("thelist").onmouseover = function() {changeheader("testing")};