var svg = document.getElementById("svg");
var clearbtn = document.getElementById("clear"); 


var circle = function(e){
    c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", 25);
    c1.setAttribute("fill", "red");
    c1.addEventListener("click",changeColor);
    svg.appendChild(c1);
}

var changeColor = function(e){
    this.setAttribute("fill", "blue");
    this.addEventListener("click", remove, true)
    e.stopPropagation();
}

var remove = function(e){
    svg.removeChild(this);
    var x = Math.random()*svg.getAttribute("width");
    var y = Math.random()*svg.getAttribute("height");
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("r", 25);
    c1.setAttribute("fill", "red"); 
    c1.addEventListener("click", changeColor);
    svg.append(c1);
}

var clear = function(e){
    while (svg.hasChildNodes()){
	svg.removeChild(svg.firstChild);
    }
}

svg.addEventListener("click", circle);
clearbtn.addEventListener("click", clear); 
