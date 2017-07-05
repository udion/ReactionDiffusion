var grid = []; //curernt state of the canvas with chemicals
var next = []; //next state of the canvas with chemicals
var dA = 1.0;
var dB = 0.5;
var feed = 0.055;
var kill = 0.062;
var laplace_kernel = [[0.05, 0.20, 0.05],
											[0.20, -1.0, 0.20],
											[0.05, 0.20, 0.05]];
var delta_t = 1;

function setup() {
	createCanvas(700,700);//creates the canvas
	pixelDensity(1);
	//setting up the grid and next
	for(var x=0; x<width; x++){
		grid[x] = [];
		next[x] = [];
		for(var y=0; y<height; y++){
			grid[x][y] = {a:1, b:0} //js objects at each cell
			next[x][y] = {a:1, b:0}
		}
	}
	initPetriDish();
}

function initPetriDish(){
	//drop some b in the dish
	for(var i=width/2-15; i<width/2+15; i++){
		for(var j=height/2-5; j<height/2+5; j++){
			grid[i][j].b = 1;
		}
	}
}

function draw() {
	background(124);

	updateNext();
	loadPixels();
	for(var x=0; x<width; x++){
		for(var y=0; y<height; y++){
			var pix = (x+y*width)*4;
			var a = grid[x][y].a;
			var b = grid[x][y].b;
			var c = floor((a-b)*255);
			pixels[pix+0] = c;
			pixels[pix+1] = c;
			pixels[pix+2] = c;
			pixels[pix+3] = 255;
		}
	}
	updatePixels();
	swap_grid_next();
}

function updateNext(){
	for(var x=1; x<width-1; x++){
		for(var y=1; y<height-1; y++){
			var A = grid[x][y].a;
			var B = grid[x][y].b;

			next[x][y].a = A +
										(dA*laplacian('a',x,y) -
										A*B*B +
										feed*(1-A))*delta_t;
			next[x][y].b = B +
										(dB*laplacian('b',x,y) +
										A*B*B -
										(kill+feed)*B)*delta_t;
		}
	}
}

function mousePressed(){
	//making the pixels on the canvas black
	grid[floor(mouseX)][floor(mouseY)].b = 1; 
}

function swap_grid_next(){
	var temp = grid;
	grid = next;
	next = temp;
}

function laplacian(ch,x,y){
	var sum = 0;
	//taking convolution with the kernel
	for(var i=0; i<3; i++){
		for(var j=0; j<3; j++){
			if(ch=='a'){
				sum += laplace_kernel[i][j]*grid[x-1+i][y-1+j].a;
			}
			else{
				sum += laplace_kernel[i][j]*grid[x-1+i][y-1+j].b;
			}
		}
	}
	return sum;
}
