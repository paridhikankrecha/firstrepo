var cal = require('./calci.js');

console.log(process.argv);
var ch;
var a,b;

let args = require('minimist')(process.argv.slice(2))
a=args['a'];
b=args['b'];
ch=args['ch'];

if (ch == 'sum' || ch == 'sub' || ch == 'multi' || ch == 'div') {
    switch (ch) {
        case 'sum':
            cal.sum(a, b);
            break;

        case 'sub':
            cal.sub(a, b);
            break;

        case 'multi':
            cal.multi(a, b); cal.sum(a, b);
            break;

        case 'div':
            cal.div(a, b);
            break;
    }
} else {
    console.log("invalid input");
}
