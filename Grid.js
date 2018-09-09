var Block = require("./Block.js");

class Grid {

  constructor(){ // __init__:
    this.width = 10
    this.height = 20
    this.grid = this.createGrid()
    this.block = this.createBlock()
    console.log(this.block)
  }


  createGrid(){
    var grid = [];
    for (var row = 0; row < this.height; row ++){
      grid[row] = []
      for (var col = 0; col < this.width; col ++){
        grid[row][col] = 0
      }
    }
    console.log(grid)
    return grid
  }

  checkCompleteLines() {
    this.grid.forEach(function(idx, item){
      if (item.reduce((a, b) => a + b, 0) == this.width){
        grid.splice(idx,1 )
        grid.splice(0,0,new Array(width).fill(0))
      }
    })
    // this.block = this.createBlock()
    return grid
  }

  createBlock() {
    var blockTypes = ["I","J","O","S","T","Z"]
    var rotations = [0,1,2,3] // allows for more fair selection/distribution


    var blockCol = Math.floor(Math.random()*(this.width-4))
    var blockRow = 0
    var blockType = blockTypes[Math.floor(Math.random()*blockTypes.length)]
    var rotation = rotations[Math.floor(Math.random()*this.rotation)]

    var block = new Block(blockType, rotation, blockRow, blockCol);

    return block
  }

  draw(block){
    gridRow = block.blockRow
    gridCol = block.blockCol

  }

  rotate(){
    this.grid = this.block.rotate()
  }
}


var my_grid = new Grid()
// console.log(Grid.createGrid())
//fct to generate blocks
//fct to check if it is filled.
