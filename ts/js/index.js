"use strict";
console.log(11);
var flag = true;
var arr = [11, 22];
var arr1 = [1, 2, 3];
var arr2 = ["1", 2];
// 枚举 数值表示状态
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["fail"] = 2] = "fail";
})(Flag || (Flag = {}));
var s = Flag.success;
console.log(s);
var Color;
(function (Color) {
    Color[Color["red"] = 4] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["green"] = 6] = "green";
})(Color || (Color = {}));
var c = Color.blue;
// console.log(Color[4]);
// console.log(c);
// let oBox: any = document.getElementById("box");
// oBox.style.color = "green";
var num;
console.log(num);
function run() {
    console.log("run");
}
function aa() {
    return function () { };
}
var n;
// n = (() => {
//   // throw new Error("ww");
// })();
function get(name, age) {
    if (name === void 0) { name = "aa"; }
    return "11";
}
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    result.map(function (v) { return v + 1; });
    return 11;
}
function g(name, age) {
    if (age) {
        return "1";
    }
    else {
        return "2";
    }
}
