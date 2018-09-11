var Block = require("./Block.js");
var term = require("terminal-kit").terminal
// term.resize(70,70)
// term( 'The terminal size is %dx%d' , term.width , term.height ) ;
// termRect = new term.Rect(0,20,0,40)
// term()
term.reset()

class Grid {

  constructor(){ // __init__: //the this. is the self.
    this.width = 10
    this.height = 20
    this.grid = this.createGrid()
    this.mainLoop()

    // example shitty code - wait2 secs to render next step
     // this.draw(this.block, 0xff, 0x33, 0x88)
  }


  createGrid(){
    var grid = [];
    for (var row = 0; row < this.height; row ++){
      grid[row] = []
      for (var col = 0; col < this.width; col ++){
        grid[row][col] = 0
      }
    }
    // console.log(grid)
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
    var gridRow = block.row
    var gridCol = block.col
    var grid = this.grid

    block.tetronimo.forEach(function(row,IndexRow){
      //small block contains tetronimo shape fromm class  Block, and position.
      //This means the loop starts searching through the tetronimo, which is a list of lists.
      //The ypos is a new notation in JavaScript. It is the integrated index function.
      //yPos actually is in python ypos = len [a_list]. It says it takes as many steps as the list long is.
      //The 'row' is the actual element it finds at index position 0 in the beginning.
      //In our case this is the first row (a list!) of our chosen, randomly generated tetronimo.
      // Here the nenxt loops start going through the elements of this list.
      row.forEach(function(element, IndexElement){
      //Now the same. sPos here is an index from 0 to 10 (because our list contains 10 thingys)
      //element is what number it finds in the row (list) selected before.
      if (grid[IndexRow + block.row][IndexElement + block.col] !== 1){
        grid[IndexRow + block.row][IndexElement + block.col] = block.tetronimo[IndexRow][IndexElement]
      }

        //So it puts the letter at the place (yPos,xPos) of the Block(In the first loop round (0,0)) into
        //the grid to the place where the tetronimo spawns. Hence, it draws from left to right starting
        //at the grid place randomly generated where the block starts our block. Yay!

      })
    })
    // console.log(grid)
    this.displayGrid(grid) // print grid on terminal with terminal-kit

//put block into grid, like... grid (0)(blockCol)
//How do we make it with the slow appearing?
  }



  collisionGround (block){
  var grid = this.grid
  var height = this.height

  if((block.row + block.tetronimo.length) == height){
    return true
  }
  return false
}

  collisionBlock (block){
  var grid = this.grid
  var height = this.height
  //wenn unter 1 im block, eine 1 in grid.
  // wenn ypos block
    for (const [yPos, row] of block.tetronimo.entries()){
      for(const[xPos, el] of row.entries()){
        if(yPos < block.tetronimo.length-1){ // if less than bottom row
           if(block.tetronimo[yPos+1][xPos] !== 1){
             if(block.tetronimo[yPos][xPos] == 1 && grid[block.row + yPos+1][block.col + xPos] == 1){
                 return true
               }
           }
        } else { // if bottom row
          // if(yPos)
          if(block.row+yPos < this.height-1){
            if(block.tetronimo[yPos][xPos] == 1 && grid[block.row + yPos+1][block.col + xPos] == 1){
              return true
            }
        }
    }
      }
    }

}

  mainLoop(){
    var blockCollided = false
    var groundCollided = false


    this.block = this.createBlock()


     var loop = setInterval(()=> {
        this.draw(this.block)
        console.log(this.collisionBlock(this.block))
      groundCollided = this.collisionGround(this.block)
      blockCollided = this.collisionBlock(this.block)

      if(blockCollided || groundCollided){ // stop loop if any collide condition returns true
       console.log(blockCollided, groundCollided)
          clearInterval(loop)
          this.mainLoop()
      }

          this.block.rotate()
        if (this.col > 0){
          var movableToLeft = this.block.moveLeft() 
          movableToleft = true 
        }
        if (this.col + this.block.tetronimo[0].length < this.width){
          var movableToRight = this.block.moveRight()
          movableToRight = true
        }
        }
        this.block.moveDown()
        this.undraw(this.block)
        this.block.updatePos(this.block.row+1,this.block.col)
    }, 250)
   }


  


  displayGrid(grid){
    // console.log(grid)
    term.moveTo(1,1) // always start from 0,0 position on terminal
    grid.forEach(function(row){
      term.colorRgb(0x33, 0xff , 0x88, row)
      term("\n")
    })
  }

 undraw(block){
  var grid = this.grid
  block.tetronimo.forEach(function(row,yPos){
      row.forEach(function(element,xPos){
        if(element == 1){
          grid[yPos + block.row][xPos + block.col] = 0
        }
      })
    })
  }


}




var my_grid = new Grid()

// console.log(Grid.createGrid())
//fct to generate blocks
//fct to check if it is filled.
