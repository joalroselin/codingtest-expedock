//FIRST ATTEMPT

//f(x,y) = xy
//g(x,y) = x^y

let displayOutput = document.getElementById('output');
const displayg1 = document.getElementById('g1');
const displayg2 = document.getElementById('g2');
const disgOutput1 = document.getElementById('gOutput1');
const disgOutput2 = document.getElementById('gOutput2');


displayg1.innerHTML = 'g1: ' + Math.pow(2, 2049);
displayg2.innerHTML = 'g2: ' + Math.pow(4, 1024);
disgOutput1.innerHTML = 'g output1: ' + Math.pow(2, 2049) / Math.pow(4, 1024);
// displayOutput.innerHTML = 'output: ' + (Math.pow(2, 2049) / Math.pow(4, 1024) * 1337);


//output returns NaN and g functions return infinity

//SECOND ATTEMPT
// 4 E 1024 = 2 E 2048
// 2E2049 / 2E2048 law of exponents like bases
// 2E

disgOutput2.innerHTML = 'g output2: ' + Math.pow(2, 1);

displayOutput.innerHTML = 'output: ' + Math.pow(2,1) * 1337;