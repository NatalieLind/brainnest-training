// a**2 + b**2 = c**2
// finding c**2
//9**2 + 9**2 = c**2

function diagonal(c) {

    return Math.sqrt(2) * c;

}

var c = 9;

document.querySelector(".diagonal").innerHTML = (diagonal(c));
console.log("Diagonal: "+ diagonal(c));

// area of a triangle
// sides = 5, 6, 7
// area= (s1 + s2 + s3)/2

function area(a) {
    var t = (s1 + s2 + s3)/2
    var a = Math.sqrt(t * (t-s1) * (t - s2) * (t - s3));
    return a;
    }

    const s1 = 5;
    const s2 = 6;
    const s3 = 7;
    
    console.log("Area: " + area());
    document.querySelector(".triangle").innerHTML = (area());

    const radius = 4;

function circleArea(ca) {
var area = 3.14*radius*radius;
return area;
}

console.log("Area of a circle " + circleArea());
document.querySelector(".circle").innerHTML = (circleArea());

function circumference(c) {
var circumference = 2*3.14*radius;

return circumference;
}

console.log("Circumference " + circumference());
document.querySelector(".circle2").innerHTML = (circumference());


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