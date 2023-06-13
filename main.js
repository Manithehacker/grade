function grade(){
    var sub1=parseInt(document.getElementById("sub1").value);
    var sub2=parseInt(document.getElementById("sub2").value);
    var sub3=parseInt(document.getElementById("sub3").value);

    if (sub1 >35 && sub2 > 35 && sub3 > 35){
        var ave= sub1 + sub2 + sub3;
        var result= ave / 3;
        // alert(result)
        if(result > 91 && result < 100){
            alert("A grade")
        }
        else if( result>81 && result<90){
            alert("B grade")
        }
        else if(result >71 && result<80){
            alert("C grade")
        }
        else{
            alert("very bad")
        }
    }
    else{
        alert("Your mark is below 35")
    }
}
// function test(){
//     var x=90;
//     var y=18;
//     var z=34;
//     var re=x+y+z;
//     var sum=re/3;
//     alert(sum)
// }