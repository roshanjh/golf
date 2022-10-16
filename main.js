
// Create canvas variable

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-history.png", function(Img){
	hole_obj.Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
	top:hole_y,
	left:_x
	});
	Canvas.add(hole_obj);
	)}
	new_image();


function new_image()
{
	// write code to Upload ball image on canvas
    fabric.Image.fromURL("ball.png", function(Img){
		ball_obj.Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		});
		Canvas.add(ball_obj);
		)}
		new_image();
	
	

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */

	if((ball_x==hole_x)&&(ball_y==ball_y)){
     canvas.remove(ball_obj);
     document.getElementById("hd3").innerHTML="You Have Hit The Goal !!!";
	 document.getElementById("myCanvas").style.bordercolor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y<=38)
		console.log("block_image_height=" + block_image_height);
		console.log("When up Arrow Key is Pressed, x = "+ ball_x +" , y = "+ ball_y);
	    canvas.remove(ball_obj);
		new_image();
	}

	function down()
	{
		 // Write a code to move ball downward.
		if(ball_y<=40)
		console.log("block_image_height=" + block_image_height);
		console.log("When Down Arrow Key is Pressed, x = "+ ball_x +" , y = "+ ball_y);
	    canvas.remove(ball_obj);
		new_image();
	}


	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			if(ball_y<=37)
		console.log("block_image_height=" - block_image_height);
		console.log("When Left Arrow Key is Pressed, x = "+ ball_x +" , y = "+ ball_y);
	    canvas.remove(ball_obj);
		new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			if(ball_y<=39)
		console.log("block_image_height=" + block_image_height);
		console.log("When Right Arrow Key is Pressed, x = "+ ball_x +" , y = "+ ball_y);
	    canvas.remove(ball_obj);
		new_image();
		}
	}
	
}

