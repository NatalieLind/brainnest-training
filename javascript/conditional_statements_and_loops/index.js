var a;
var b;

function integers(a,b) {

    if (a > b) {
        console.log("The largest number between " + a + " and " + b + " is " + a);
        document.querySelector(".Linteger").innerHTML = (a);
    } else if (a < b) {
        console.log("The largest number between " + a + " and " + b + " is " + b);
        document.querySelector(".Linteger").innerHTML = (b);
    } else if (a == b) {
        console.log("Numbers "+a+" and " + b + " are equal");
        document.querySelector(".Linteger").innerHTML = ("Numbers "+a+" and " + b + " are equal");
    }
 
}

console.log(integers(15,15));

function evenOdd (a) {
 if (a % 2 == 0) {
    console.log(a+" is even");
    document.querySelector(".evenORodd").innerHTML = ("even");
} else {
    console.log(a+" is odd");
    document.querySelector(".evenORodd").innerHTML = ("odd")
}
}

console.log(evenOdd(13));