var random = Math.ceil(Math.random() * 100);


var cur_g = prompt("Input a value");
	console.log("random = " +random);
	console.log("hot");
var prev = Math.abs(random - cur_g);	
  
var cur_d = 0;

while( random != cur_g) {

	
	console.log("prev = " + prev );
	
	cur_g = prompt("Input a value");
	console.log("cur_g = " +cur_g);
	
	cur_d = Math.abs( random - cur_g);
  
  console.log("cur_d = " + Math.abs( random - cur_g) );

	if ( cur_d < prev && cur_g != random) {
		console.log("hot");
	}
    if( cur_d > prev && cur_g != random){
		console.log("cold");
	}
	else if( cur_d === prev && cur_g != random ) {
	   console.log("cold");
	}
	
prev = cur_d;
	 
}
alert("Win");