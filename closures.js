function z(){
    var b=100;
    function x(){
        var a=22;
        function y(){
            console.log(a,b);//clouser is function along with its lexical scope
        }
        y();
    }
    x();
}
z();
