const arr=[5,1,3,2,6];
//sum
const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output);
//max
const output1=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max;
},0);
console.log(output1);