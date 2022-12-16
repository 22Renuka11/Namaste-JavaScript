//blocked is{ } where multiple statement are grouped
//blocked also known as Compound statement
//all veriable and function access inside blocked is block scope
//shadowing same name variable outside the block
var a=100;
let b=100;
const c=100;
{
    var a=10;//access outside block
    let b=20;//not access outside block
    const c=30;//not access outside block
    console.log(a);
    console.log(b);//block scope
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
//console.log(b);//not execute
//console.log(c);//not execute
/*illigele shadowing
let a=10;
{
    var a=10;
}
*/
