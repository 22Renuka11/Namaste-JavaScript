function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b=10;
a();
/*lexical enivonment: herirarchy (local memory+lexical environment of parent)*/
