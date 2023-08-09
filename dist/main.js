/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var resultElement = document.getElementById("result");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var submitBtn = document.getElementById("submit");
var plusBtn = document.getElementById("plus");
var minusBtn = document.getElementById("minus");
var action = "+";
plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}
function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  var num1 = Number(inp1.value);
  var num2 = Number(inp2.value);
  return actionSymbol === "+" ? num1 + num2 : num1 - num2;
}
submitBtn.onclick = function () {
  var result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
};
/******/ })()
;
//# sourceMappingURL=main.js.map