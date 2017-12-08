var additem = function(){
	console.log("its firing");
	var thelist = document.getElementById("thelist");
	var newElem = document.createElement("li");
	newElem.innerHTML = "some stuff";
	thelist.appendChild(newElem);
};

var changeheader = function(blah)
{
	var header = document.getElementById("h");
	var wow = document.createElement("h1");
	wow.innerHTML = blah;
	header.replaceChild(wow,header);
}

var wow = document.getElementById("b");
wow.addEventListener('click', additem);

//var wow2 = document.getElementById("h");
document.getElementById("thelist").onmouseover = function() {changeheader("testing")};