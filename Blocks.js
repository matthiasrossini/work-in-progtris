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

var Block = (blockType,rotation) {
	this.blockType = blockTypes[0];
	this.blockTypes = blockTypes
	this.blockTypeA = 0

	this.rotation = rotation
}

Block.prototype.rotate = function(){
	var blockmovement = 0;
	var nextmovement =  this.blockTypes[(this.blockTypeA + 1) % this.blockTypes.length];

	
}

// Grid {
// 	function generate.Block{
// 		var newtype = Block[parseInt(Math.random()*Block.length, 10)]
// 		return new  = (newtype[0],newtype[1]);
// 	}
// }




