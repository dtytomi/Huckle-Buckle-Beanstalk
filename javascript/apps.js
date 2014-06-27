// to add a botton to the div tag
$(".wrapper").append('<Input type="submit" value="Start">');

// to select the button created
$("input").click( function() {
	var x = Math.ceil(Math.random() * 100);

var y = 0;

console.log(x);

y = prompt("Input a value");
    alert("You are Hot");


while( x != y) {

	 var y = prompt("Input a value");

    if( y < x ){
        alert("You are cold");
    } else if( y > x ){
        alert("You are hot");
    }

    
}

alert("Congratulations!!! You Won");

});

 