function mySetInterval(fn, a, b) {
  this.time = a;
  this.handle = null;

  this.start = () => {
    this.handle = setTimeout(() => {
      fn();
      this.time += b;
      this.start();
    }, this.time);
  };

  this.stop = () => {
    clearTimeout(this.handle);
  };
}

const a = new mySetInterval(
  () => {
    console.log(1);
  },
  1000,
  1000
);

// a.start();
// setTimeout(() => {
//   a.stop();
// }, 10000);

function set2(fn, a, b) {
  let time = a;
  let timer = () => {};

  let start = () => {
    timer = setTimeout(() => {
      fn();
      time += b;
      start();
    }, time);
  };
  start();
  let cancel = () => {
    clearTimeout(timer);
  };
  return cancel;
}

const cccc = set2(() => console.log("a"), 1000, 1000);
console.log(`------cccc------`);
console.log(cccc);
setTimeout(() => {
  cccc();
}, 10000);
