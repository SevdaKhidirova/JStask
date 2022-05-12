//2. Bir funksiya yazırsız hansı ki, n qəbul edib n ci fibonaçi rəqəmini qaytarir
"use strict";
let fibonacci = (number) => {
    let a = 0;
    let b = 1;
    let c = 0;
    
    for(let i = 2; i <= number; i++){
       c = a + b;    
       a = b; 
       b = c; 
    }
   alert(b)
  // return number ? b : a;
   }
// 1 1 2 3 5 8 13 21 34 55


