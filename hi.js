function expandOne() {
  document.getElementById("first").classList.add("autoheight");
  document.getElementById("firstcaret").innerHTML = "<i class='fas fa-caret-up' onclick='collapseOne()'>";
}
function collapseOne() {
  document.getElementById("first").classList.remove("autoheight");
  document.getElementById("firstcaret").innerHTML = "<i class='fas fa-caret-down' onclick='expandOne()'>";
}

function expandTwo() {
  document.getElementById("second").classList.add("autoheight");
  document.getElementById("secondcaret").innerHTML = "<i class='fas fa-caret-up' onclick='collapseTwo()'>";
}
function collapseTwo() {
  document.getElementById("second").classList.remove("autoheight");
  document.getElementById("secondcaret").innerHTML = "<i class='fas fa-caret-down' onclick='expandTwo()'>";
}

function expandThree() {
  document.getElementById("third").classList.add("autoheight");
  document.getElementById("thirdcaret").innerHTML = "<i class='fas fa-caret-up' onclick='collapseThree()'>";
}
function collapseThree() {
  document.getElementById("third").classList.remove("autoheight");
  document.getElementById("thirdcaret").innerHTML = "<i class='fas fa-caret-down' onclick='expandThree()'>";
}

console.log("hi");
