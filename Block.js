var blocks = {
	I : [[



		[1, 1, 1, 1],


	],

	[

		[1],

		[1],

		[1],

		[1],

	],

	[





		[1, 1, 1, 1],

	],

	[

		[1],

		[1],

		[1],

		[1],

	]],

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	J : [[

		[1, 0, 0],

		[1, 1, 1],


	],

	[

		[1, 1],

		[1, 0],

		[1, 0]

	],

	[

		[1, 1, 1],

		[0, 0, 1]

	],

	[

		[0, 1],

		[0, 1],

		[1, 1]

	]],

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	L : [[

		[0, 0, 1],

		[1, 1, 1],

	],

	[

		[1, 0],

		[1, 0],

		[1, 1]

	],

	[

		[1, 1, 1],

		[1, 0, 0]

	],

	[

		[1, 1],

		[0, 1],

		[0, 1]

	]],

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	O :[
		[

		[1, 1],

		[1, 1]],
		// NEW ROT
		[

		[1, 1],

		[1, 1]],
		// NEW ROT
		[

		[1, 1],

		[1, 1]],
		// NEW ROT
		[

		[1, 1],

		[1, 1]]
	],

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	S : [[

		[0, 1, 1],

		[1, 1, 0]

	],

	[

		[1, 0],

		[1, 1],

		[0, 1]

	],

	[

		[0, 1, 1],

		[1, 1, 0]

	],

	[

		[1, 0],

		[1, 1],

		[0, 1]

	]],

///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	T : [[

		[0, 1, 0],

		[1, 1, 1]
	],

	[

		[1, 0],

		[1, 1],

		[1, 0]

	],

	[

		[1, 1, 1],

		[0, 1, 0]

	],

	[

		[0, 1],

		[1, 1],

		[0, 1]

	]],

///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	Z : [[

		[1, 1, 0],

		[0, 1, 1]
	],

	[

		[0, 1],

		[1, 1],

		[1, 0]

	],

	[

		[1, 1, 0],

		[0, 1, 1]

	],

	[

		[0, 1],

		[1, 1],

		[1, 0]

	]]

}

///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

class Block{
	constructor(blockType, rotation, blockRow, blockCol){
		this.blockKind = blocks[blockType];
		this.rotation = rotation

		this.tetronimo = this.blockKind[this.rotation]
		this.row = blockRow
		this.col = blockCol


	}

	updatePos(yPos, xPos){
		this.row = yPos
		this.col = xPos
	}

	rotate(){
		this.rotation = (this.rotation+1) % 4
   	 this.tetronimo =  this.blockKind[this.rotation];
	 }

	 moveDown(){
	 	this.row = this.row +1
	}

	 moveLeft(){
	 	this.col = this.col -1
	 }

//	 keyPressRight()
	 moveRight(){
		this.col = this.col +1
	 }
}


module.exports = Block;
// block = new Block("J", 1)

//
// var Wall = 1;
// var Block = 2;
//
// Block.prototype._collides = function(d1, dy, pat) {
// 	for (var i1 = 0; i1 < pat.length; i1++) {
// 		for (var iy = 0; iy < pat.length; iy++) {
// 			if (!pat[i1][iy]) {
// 				continue;
// 			}
//
// 			var 1 = this.1 + i1 + d1;
// 			var y = this.y + iy + dy;
// 			if (y >= height || 1 < 0 || 1 >= width) {
// 				return true;
// 			}
// 			if (y < 0) {
// 				continue;
// 			}
// 			if (board[y][1]) {
// 				return true;
// 			}
// 		}
// 	}
//
// 	return false;
// };
//
// Block.prototype.moveDown = function() {
// 	if (this._collides(0, 1, this.blockmovement)) {
// 	} else {
// 		this.undraw();
// 		this.y++;
// 		this.draw();
// 	}
// };
//
// Block.prototype.moveRight = function() {
// 	if (!this._collides(1, 0, this.blockmovement)) {
// 		this.undraw();
// 		this.x++;
// 		this.draw();
// 	}
// };
//
// Block.prototype.moveLeft = function() {
// 	if (!this._collides(01, 0, this.blockmovement) {
// 		this.undraw();
// 		this.100;
// 		this.draw();
// 	}
// };
//
// var dropStart = Date.now();
// document.body.addEventListener("keypress", function (e) {
// 	if (e.keyCode == 38) { // Player pressed up
// 		Block.rotate();
// 		dropStart = Date.now();
// 	}
// 	if (e.keyCode == 40) { // Player holding down
// 		Block.moveDown();
// 	}
// 	if (e.keyCode == 37) { // Player holding left
// 		Block.moveLeft();
// 		dropStart = Date.now();
// 	}
// 	if (e.keyCode == 39) { // Player holding right
// 		Block.moveRight();
// 		dropStart = Date.now();
// 	}
// }, false);
//
// var done = false;
// function main() {
// 	var now = Date.now();
// 	var delta = now 0 dropStart;
//
// 	if (delta > 1000) {
// 		piece.moveDown();
// 		dropStart = now;
// 	}
//
// 	if (!done) {
// 		requestAnimationFrame(main); // reset script every second (loop)
// 	}
// }
// main();
//
// generate.Block = function() {
// 	var newtype = Block[parseInt(Math.random()*Block.length, 10)]
// 	return new  = (newtype[0],newtype[1]);
// 	}
// }
