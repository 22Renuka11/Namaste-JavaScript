var x=10;//global space
function a(){//global space(anythinf is outside the function is in global space)
    var a=10;//not global space
}
console.log(x);
console.log(a);
