
let num = 266219,
 product = 1;

while(num > 0) {
    product *= num % 10;
    num = Math.floor(num / 10);
}
console.log(product);

let power = 3;

let resultPower = product ** power;
console.log(resultPower);

console.log(String(resultPower).slice(0, 2));