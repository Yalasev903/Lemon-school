// work № 1.1

let numbers = 5;

     if(numbers == '1') {
console.log('один');
}

     if(numbers == '2') {
console.log('два');
}

     if(numbers == '3') {
console.log('три');
}

     if(numbers == '4') {
console.log('четыре');
}

     if(numbers == '5') {
     console.log('пять');
     }

     if(numbers == '6') {
console.log('шесть');
}

     if(numbers == '7') {
console.log('семь');
}

     if(numbers == '8') {
 console.log('восемь')
 }

     if(numbers == '9') {
console.log('девять');
}

if(numbers == '0') {
     console.log('ноль');
}

console.log(numbers);

// work № 1.1(way № 2)

let secondNamber = 1;

switch (secondNamber) {
     case 0: 
     console.log('ноль');
     break;

     case 1:
     console.log('один');
     break;

     case 2: 
     console.log('два');
     break;

     case 3: 
     console.log('три');
     break;

     case 4: 
     console.log('четыре');
     break;

     case 5: 
     console.log('пять');
     break;

     case 6: 
     console.log('шесть');
     break;

     case 7: 
     console.log('семь');
     break;

     case 8: 
     console.log('восемь');
     break;

     case 9: 
     console.log('девять');
     break;
}

console.log(secondNamber);

// work № 1.2

let value = (1 > 2);
console.log(value);

// work № 1.3

let unitMeasure = 'GB';
let number = 5;

     if (unitMeasure == 'Byte') {
  console.log(number);
}

     if (unitMeasure == 'KB') {
  console.log(number * 1024);
}

     if (unitMeasure == 'MB') {
  console.log(number * 1024 * 1024);
}

     if (unitMeasure == 'GB') {
  console.log(number * 1024 * 1024 * 1024);
}

// work № 1.4

let creditPersent = 5;
let bodyCredit = 5000;
let creditYears = 2;

function mounthPersent (creditPersent, bodyCredit) { //месячный процент
     return (bodyCredit / 100) * creditPersent;
}
let persentMounth = mounthPersent(creditPersent, bodyCredit);

 function yearsPersent (persentMounth){//годовой процент
 return persentMounth * 12;
}

console.log(yearsPersent(persentMounth));

let persentYears = yearsPersent(persentMounth);

function allPersent(persentYears){//процент за все время
     return persentYears * creditYears;
}

console.log(allPersent(persentYears));

let allPer = allPersent(persentYears);

function allSum(allPer){ // общая сумма денег которую выплатит клиент
     return allPer + bodyCredit;
}

console.log(allSum(allPer));

