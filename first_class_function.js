//function statement & function declaration
function a(){
    console.log("Namaste Javascript");
}
a();
//function expression
var b=function (){      //anonymous function assign to variable
    console.log("b called");
}
b();
//Anonymous Function
/*function (){        //function don't assign name 

}*/
//Named Function Expression
var b=function xyz(){      //function with name assign to variable
    console.log("b called");
}
b();
xyz();
//Difference between parameters and arguments
var b=function(param1,param2){
    console.log("b is called");
}
b(1,2);             //1,2 are argument
//First Class Function
var b=function(param1,param2){
    console.log("b is called");
}
b(function (){

});  //ability to use function as value is called first class function
//first class citizens is same as first class function



//Arrow Function

