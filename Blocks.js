var I = [

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

	]

];



var J = [

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

	]

];



var L = [

	[

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

	]

];



var O = [

	[

		[-, -, -, -],

		[-, X, X, -],

		[-, X, X, -],

		[-, -, -, -],

	]

];



var S = [

	[

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

	]

];



var T = [

	[

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

	]

];



var Z = [

	[

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

	]

];

var Block = (type,rotate) {
	type = ['I','J','L','O','S','T','Z']{
		rotate = [0,1,2,3]
	}
}


Grid {
	function generate.Block{
		type = Block[parseInt(Math.random()*Block.length, 10)]
		return new Block(p[0],p[1]);
	}
}

Block.prototype.rotate = function(){
	type = Block
	rotate = rotate + 1 
	return 

}

var Rotate = {
	Rotate : null,
	Start : function(){
		if (!this.Rotate){
			this.Rotate = 
		}
	}
}


