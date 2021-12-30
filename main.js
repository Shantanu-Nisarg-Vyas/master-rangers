var canvas = new fabric.Canvas ('canvas1');

 block_y=1;
 block_x=1;

var block_object= "";

function new_image(get_image){ 
    fabric.Image.fromURL(get_image, function(Img) {
		block_object = Img;
		block_object.scaleToHeight(230);
		block_object.scaleToWidth(180);
		block_object.set({
			top:block_y,
			left:block_x
		})
		canvas.add(block_object)
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82'){
		block_x = 0;
		new_image('red.png');
		console.log("red");
	}

	if(keyPressed == '71'){
		block_x = 200;
		new_image('green.png');
		console.log("green");
	}
	
	if(keyPressed == '89'){
		block_x = 400;
		new_image('yellow.png');
		console.log("yellow");
	}

	if(keyPressed == '80'){
		block_x = 600;
		new_image('pink.png');
		console.log("pink");
	}

	if(keyPressed == '66'){
		block_x = 800;
		new_image('blue.png');
		console.log("blue");
	}
	
}