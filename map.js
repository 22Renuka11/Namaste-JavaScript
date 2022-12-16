const arr=[5,1,3,2,6];
function double(x){
    return x*2;
}
const output =arr.map(double);
function triple(x){
    return x*3;
}
const output1 =arr.map(triple);
function binary(x){
    return x.toString(2);
}
const output2 =arr.map(binary);
console.log(output);
console.log(output1);
console.log(output2);