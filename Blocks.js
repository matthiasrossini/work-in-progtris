var blocks = {
	I : [
	[

		[-, -, -, -],

		[X, X, X, X],

		[-, -, -, -],

		[-, -, -, -],

	],

	[

		[-, -, X, -],

		[-, -, X, -],

		[-, -, X, -],

		[-, -, X, -],

	],

	[

		[-, -, -, -],

		[-, -, -, -],

		[X, X, X, X],

		[-, -, -, -],

	],

	[

		[-, X, -, -],

		[-, X, -, -],

		[-, X, -, -],

		[-, X, -, -],

	]]

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
	J : [

	[

		[X, -, -],

		[X, X, X],

		[-, -, -]

	],

	[

		[-, X, X],

		[-, X, -],

		[-, X, -]

	],

	[

		[-, -, -],

		[X, X, X],

		[-, -, X]

	],

	[

		[-, X, -],

		[-, X, -],

		[X, X, -]

	]]

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	L : [[

		[-, -, X],

		[X, X, X],

		[-, -, -]

	],

	[

		[-, X, -],

		[-, X, -],

		[-, X, X]

	],

	[

		[-, -, -],

		[X, X, X],

		[X, -, -]

	],

	[

		[X, X, -],

		[-, X, -],

		[-, X, -]

	]]

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	O :[[

		[-, -, -, -],

		[-, X, X, -],

		[-, X, X, -],

		[-, -, -, -],

	]]

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	S : [[

		[-, X, X],

		[X, X, -],

		[-, -, -]

	],

	[

		[-, X, -],

		[-, X, X],

		[-, -, X]

	],

	[

		[-, -, -],

		[-, X, X],

		[X, X, -]

	],

	[

		[X, -, -],

		[X, X, -],

		[-, X, -]

	]]

///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	T : [[

		[-, X, -],

		[X, X, X],

		[-, -, -]

	],

	[

		[-, X, -],

		[-, X, X],

		[-, X, -]

	],

	[

		[-, -, -],

		[X, X, X],

		[-, X, -]

	],

	[

		[-, X, -],

		[X, X, -],

		[-, X, -]

	]]

///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	Z : [[

		[X, X, -],

		[-, X, X],

		[-, -, -]

	],

	[

		[-, -, X],

		[-, X, X],

		[-, X, -]

	],

	[

		[-, -, -],

		[X, X, -],

		[-, X, X]

	],

	[

		[-, X, -],

		[X, X, -],

		[X, -, -]

	]]

}

///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

var Block = (blockType,rotation) {
	this.blockType = blockTypes[0];
	this.blockTypes = blockTypes
	this.blockTypeA = 0

	this.rotation = rotation

	this.x = width/2-parseInt(Math.ceil(this.blockType.length/2),10);
	this.y = -2; 
}


var Wall = 1;
var Block = 2;

Block.prototype._collides = function(dx, dy, pat) {
	for (var ix = 0; ix < pat.length; ix++) {
		for (var iy = 0; iy < pat.length; iy++) {
			if (!pat[ix][iy]) {
				continue;
			}

			var x = this.x + ix + dx;
			var y = this.y + iy + dy;
			if (y >= height || x < 0 || x >= width) {
				return true;
			}
			if (y < 0) {
				continue;
			}
			if (board[y][x]) {
				return true;
			}
		}
	}

	return false;
};

Block.prototype.rotate = function(){
	var blockmovement = 0;
	var nextblock =  this.blockTypes[(this.blockTypeA + 1) % this.blockTypes.length];

	if (this._collides(0,0,nextblock)){
		blockmovement = this.x > width / 2 ? -1 : 1;
	}

	if (!this._collides(blockmovement,0,nextblock)){
		this.undraw();
		this.x += blockmovement;
		this.blockTypeA = (this.blockTypeA + 1) % this.blockTypes.length;
		this.blockType = this.blockTypes[this.blockTypeA]
		this.draw(); 
	}
}

Block.prototype.moveDown = function() {
	if (this._collides(0, 1, this.blockmovement)) {
	} else {
		this.undraw();
		this.y++;
		this.draw();
	}
};

Block.prototype.moveRight = function() {
	if (!this._collides(1, 0, this.blockmovement)) {
		this.undraw();
		this.x++;
		this.draw();
	}
};

Block.prototype.moveLeft = function() {
	if (!this._collides(-1, 0, this.blockmovement) {
		this.undraw();
		this.x--;
		this.draw();
	}
};

var dropStart = Date.now();
document.body.addEventListener("keypress", function (e) {
	if (e.keyCode == 38) { // Player pressed up
		Block.rotate();
		dropStart = Date.now();
	}
	if (e.keyCode == 40) { // Player holding down
		Block.moveDown();
	}
	if (e.keyCode == 37) { // Player holding left
		Block.moveLeft();
		dropStart = Date.now();
	}
	if (e.keyCode == 39) { // Player holding right
		Block.moveRight();
		dropStart = Date.now();
	}
}, false);

var done = false;
function main() {
	var now = Date.now();
	var delta = now - dropStart;

	if (delta > 1000) {
		piece.moveDown();
		dropStart = now;
	}

	if (!done) {
		requestAnimationFrame(main); // reset script every second (loop)
	}
}
main();

generate.Block = function() {
	var newtype = Block[parseInt(Math.random()*Block.length, 10)]
	return new  = (newtype[0],newtype[1]);
	}
}




