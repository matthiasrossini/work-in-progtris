var blocks = {
	I : [[

		["-", "-", "-", "-"],

		["X", "X", "X", "X"],

		["-", "-", "-", "-"],

		["-", "-", "-", "-"],

	],

	[

		["-", "-", "X", "-"],

		["-", "-", "X", "-"],

		["-", "-", "X", "-"],

		["-", "-", "X", "-"],

	],

	[

		["-", "-", "-", "-"],

		["-", "-", "-", "-"],

		["X", "X", "X", "X"],

		["-", "-", "-", "-"],

	],

	[

		["-", "X", "-", "-"],

		["-", "X", "-", "-"],

		["-", "X", "-", "-"],

		["-", "X", "-", "-"],

	]],

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	J : [[

		["X", "-", "-"],

		["X", "X", "X"],

		["-", "-", "-"]

	],

	[

		["-", "X", "X"],

		["-", "X", "-"],

		["-", "X", "-"]

	],

	[

		["-", "-", "-"],

		["X", "X", "X"],

		["-", "-", "X"]

	],

	[

		["-", "X", "-"],

		["-", "X", "-"],

		["X", "X", "-"]

	]],

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	L : [[

		["-", "-", "X"],

		["X", "X", "X"],

		["-", "-", "-"]

	],

	[

		["-", "X", "-"],

		["-", "X", "-"],

		["-", "X", "X"]

	],

	[

		["-", "-", "-"],

		["X", "X", "X"],

		["X", "-", "-"]

	],

	[

		["X", "X", "-"],

		["-", "X", "-"],

		["-", "X", "-"]

	]],

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	O :[[

		["-", "-", "-", "-"],

		["-", "X", "X", "-"],

		["-", "X", "X", "-"],

		["-", "-", "-", "-"],

	]],

/// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	S : [[

		["-", "X", "X"],

		["X", "X", "-"],

		["-", "-", "-"]

	],

	[

		["-", "X", "-"],

		["-", "X", "X"],

		["-", "-", "X"]

	],

	[

		["-", "-", "-"],

		["-", "X", "X"],

		["X", "X", "-"]

	],

	[

		["X", "-", "-"],

		["X", "X", "-"],

		["-", "X", "-"]

	]],

///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	T : [[

		["-", "X", "-"],

		["X", "X", "X"],

		["-", "-", "-"]

	],

	[

		["-", "X", "-"],

		["-", "X", "X"],

		["-", "X", "-"]

	],

	[

		["-", "-", "-"],

		["X", "X", "X"],

		["-", "X", "-"]

	],

	[

		["-", "X", "-"],

		["X", "X", "-"],

		["-", "X", "-"]

	]],

///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

	Z : [[

		["X", "X", "-"],

		["-", "X", "X"],

		["-", "-", "-"]

	],

	[

		["-", "-", "X"],

		["-", "X", "X"],

		["-", "X", "-"]

	],

	[

		["-", "-", "-"],

		["X", "X", "-"],

		["-", "X", "X"]

	],

	[

		["-", "X", "-"],

		["X", "X", "-"],

		["X", "-", "-"]

	]]

}

///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

class Block{
	constructor(blockType, rotation){
		this.blockType = blocks[blockType];
		console.log(blockType, rotation)
		// this.rotation = rotation
		// this.blockShape = blockType[this.rotation]
		console.log(this.blockType[rotation])
	}
}

module.exports = Block;
// block = new Block("J", 1)

//
// var Wall = 1;
// var Block = 2;
//
// Block.prototype._collides = function(d"X", dy, pat) {
// 	for (var i"X" = 0; i"X" < pat.length; i"X"++) {
// 		for (var iy = 0; iy < pat.length; iy++) {
// 			if (!pat[i"X"][iy]) {
// 				continue;
// 			}
//
// 			var "X" = this."X" + i"X" + d"X";
// 			var y = this.y + iy + dy;
// 			if (y >= height || "X" < 0 || "X" >= width) {
// 				return true;
// 			}
// 			if (y < 0) {
// 				continue;
// 			}
// 			if (board[y]["X"]) {
// 				return true;
// 			}
// 		}
// 	}
//
// 	return false;
// };
//
// Block.prototype.rotate = function(){
// 	var blockmovement = 0;
// 	var ne"X"tblock =  this.blockTypes[(this.blockTypeA + 1) % this.blockTypes.length];
//
// 	if (this._collides(0,0,ne"X"tblock)){
// 		blockmovement = this.x > (width / 2) ? -1 : 1;
// 	}
//
// 	if (!this._collides(blockmovement,0,nextblock)){
// 		this.undraw();
// 		this.x += blockmovement;
// 		this.blockTypeA = (this.blockTypeA + 1) % this.blockTypes.length;
// 		this.blockType = this.blockTypes[this.blockTypeA]
// 		this.draw();
// 	}
// }
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
// 	if (!this._collides("-"1, 0, this.blockmovement) {
// 		this.undraw();
// 		this."X""-""-";
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
// 	var delta = now "-" dropStart;
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
