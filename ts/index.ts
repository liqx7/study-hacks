console.log(11);

var flag = true;

let arr: number[] = [11, 22];

let arr1: Array<number> = [1, 2, 3];

let arr2: [string, number] = ["1", 2];

// 枚举 数值表示状态

enum Flag {
  success = 1,
  fail = 2
}

let s: Flag = Flag.success;

console.log(s);

enum Color {
  red = 4,
  blue,
  "green"
}

let c: Color = Color.blue;
// console.log(Color[4]);

// console.log(c);

// let oBox: any = document.getElementById("box");
// oBox.style.color = "green";

let num: number | undefined;
console.log(num);

function run(): void {
  console.log("run");
}

function aa(): Function {
  return () => {};
}

var n: never;
// n = (() => {
//   // throw new Error("ww");
// })();

function get(name: string = "aa", age?: number): string {
  return "11";
}

function sum(...result: number[]): number {
  result.map(v => v + 1);
  return 11;
}

function g(name: string, age: number): string;
function g(name: string): string;
function g(name: any, age?: any): any {
  if (age) {
    return "1";
  } else {
    return "2";
  }
}

// 静态方法与实力方法

class Person {
  protected name: string;
  constructor(n: string) {
    this.name = n;
  }
}
