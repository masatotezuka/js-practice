const arr = new Array(1000000).fill(0).map((v, i) => i);

let sum = 0;
const len = arr.length | 0;
function addSum(v) {
  sum += v;
}

for (let j = 0; j < 5; j++) {
  sum = 0;
  console.time("for");
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  console.timeEnd("for");
  console.log(sum);
}

for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time("for of");
  for (const v of arr) {
    sum += v;
  }
  console.timeEnd("for of");
  console.log(sum);
}

for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time("forEach(arrow)");
  arr.forEach((v) => {
    sum += v;
  });
  console.timeEnd("forEach(arrow)");
  console.log(sum);
}

for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time("forEach(function)");
  arr.forEach(addSum);
  console.timeEnd("forEach(function)");
  console.log(sum);
}

for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time("map(arrow)");
  arr.map((v) => {
    sum += v;
  });
  console.timeEnd("map(arrow)");
  console.log(sum);
}

for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time("map(function)");
  arr.map(addSum);
  console.timeEnd("map(function)");
  console.log(sum);
}

for (let j = 0; j < 5; j++) {
  sum = 0;
  console.time("Typed for");
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  console.timeEnd("Typed for");
  console.log(sum);
}
