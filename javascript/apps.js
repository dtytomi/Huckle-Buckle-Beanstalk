var x = Math.ceil(Math.random() * 100);

var y = 0;

console.log(x);

while( x != y) {
    y = prompt("Input a value");
    if( y < x){
        alert("You are cold");
    } else if( y > x){
        alert("You are hot");
    }
}


 