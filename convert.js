var num = process.argv[2];
var from = process.argv[3];
var to = process.argv[5];

var exp1;
var exp2;

if (from == 'mm') {
    exp1 = -3;
} else if (from == 'cm') {
    exp1 = -2;
} else if (from == 'm') {
    exp1 = 0;
} else if (from == 'kg') {
    exp1 = 3;
} else if (from == 'g') {
    exp1 = 0;
} 

if (to == 'mm') {
    exp2 = -3;
} else if (to == 'cm') {
    exp2 = -2;
} else if (to == 'm') {
    exp2 = 0;
} else if (to == 'kg') {
    exp2 = 3;
} else if (to == 'g') {
    exp2 = 0;
}

var result = exponent(num, exp1-exp2);
console.log(result);


function exponent(num,exp) {
    if (exp > 0) {
        for (i = 0; i<exp; i++) {
            num =num*10;
        }
    } else {
        for (i = exp; i<0; i++) {
            num =num/10;
        }
    }
    return num;

}

