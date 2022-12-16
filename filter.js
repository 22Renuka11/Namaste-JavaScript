const arr=[5,1,3,2,6];
//fiter odd values
function isOdd(x){
    return x%2;
}
const output=arr.filter(isOdd);
//filter even value
function iseven(x){
    return x%2==0;
}
const output1=arr.filter(iseven);
console.log(output);
console.log(output1);