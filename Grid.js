var Block = require("./Block.js");
var term = require("terminal-kit").terminal
class Grid {

  constructor(){ // __init__: //the this. is the self. 
    this.width = 10
    this.height = 20
    this.grid = this.createGrid()
    this.block = this.createBlock()
    this.draw(this.block)

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
                              //correct blocks, remove zero lines. 
    var blockCol = Math.floor(Math.random()*(this.width-4))
    var blockRow = 0
    var blockType = blockTypes[Math.floor(Math.random()*blockTypes.length)]
    var rotation = rotations[Math.floor(Math.random()*rotations.length)]

    var block = new Block(blockType, rotation, blockRow, blockCol);
    return block
    //THe new is necessary in Javascxript to show it is a new object of a certain class. 
  }

  draw(block){
    console.log(block)
    var gridRow = block.row
    var gridCol = block.col
    var grid = this.grid

    block.tetronimo.forEach(function(row,yPos){
      //small block contains tetroimo shape fromm class  Block, and position. 
      //This means the loop starts searching through the tetronimo, which is a list of lists. 
      //The ypos is a new notation in JavaScript. It is the integrated index function. 
      //yPos actually is in python ypos = len [a_list]. It says it takes as many steps as the list long is. 
      //The 'row' is the actual element it finds at index position 0 in the beginning.
      //In our case this is the first row (a list!) of our chosen, randomly generated tetronimo. 
      // Here the nenxt loops start going through the elements of this list. 
      row.forEach(function(element, xPos){
      //Now the same. sPos here is an index from 0 to 10 (because our list contains 10 thingys)
      //element is what number it finds in the row (list) selected before.
        grid[yPos + gridRow][xPos + gridCol] = block.tetronimo[yPos][xPos]

        //So it puts the letter at the place (yPos,xPos) of the Block(In the first loop round (0,0)) into 
        //the grid to the place where the tetronimo spawns. Hence, it draws from left to right starting
        //at the grid place randomly generated where the block starts our block. Yay!

      })
    })
    console.log(grid)
//put block into grid, like... grid (0)(blockCol)
//How do we make it with the slow appearing?
  }

  rotate(){
    this.grid = this.block.rotate()
  }
}


var my_grid = new Grid()
// console.log(Grid.createGrid())
//fct to generate blocks
//fct to check if it is filled.
