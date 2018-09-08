blocks = {
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

/// ---------------------------------------------------------
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

/// ---------------------------------------------------------
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

/// dsfjadskfjadsfjkdjfdkjfakjfkadsjfklasdjfkldjdkjkfjklasjfkldj

	O :[[

		[-, -, -, -],

		[-, X, X, -],

		[-, X, X, -],

		[-, -, -, -],

	]]

/// fadsfnkadsfjkadjfkadfjkladsjfkasdjfkadsjfkdsajfkdjfkldajfkljkldfds

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

///fadsjkfjsklfjkdalsfjakdlsjfakldsjfdakslfjkadlsfjadksfjkdasjfkjfds

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

/// dsnadskfkfjdljfaklsjfksjfkadlfjakldfjkfjdksfjadsfdasfadsfdjl

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

///fsdklfdfjdkfdsjfkdsfksjfkasjfkdfdfdjskfdfdsojffdsfjfjdsfasdlfkdsföldfdflsdakfdk

var Block = (blockType,rotation) {
	this.blockType = blockTypes[0];
	this.blockTypes = blockTypes
	this.blockTypeA = 0

	this.rotation = rotation

	this.x = width/2-parseInt(Math.ceil(this.blockType.length/2),10);
	this.y = -2; 
}

Block.prototype.rotate = function(){
	var blockmovement = 0;
	var nextblock =  this.blockTypes[(this.blockTypeA + 1) % this.blockTypes.length];

	if (this._collides(0,00,nextblock)){
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

// Grid {
// 	function generate.Block{
// 		var newtype = Block[parseInt(Math.random()*Block.length, 10)]
// 		return new  = (newtype[0],newtype[1]);
// 	}
// }




