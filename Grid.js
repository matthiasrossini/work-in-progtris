var Block = require("./Block.js");
var term = require("terminal-kit").terminal
// term.resize(70,70)
// term( 'The terminal size is %dx%d' , term.width , term.height ) ;
// termRect = new term.Rect(0,20,0,40)
// term()
term.reset()
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
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
  //wenn unter 1 im block, eine 1 in grid. 
  // wenn ypos block 
    block.tetronimo.forEach(function(row, yPos){
      row.forEach(function(element,xPos){
        if((yPos < block.tetronimo.length && (block.tetronimo[yPos+1] !== 1)) || (yPos == block.tetronimo.length)){
          // check grid here
          // the lines are an or$
          if(element == 1 && block.tetronimo[yPos+1] == 1){
            return true
          } 
        }
      })
    })
    return false
}

  mainLoop(){

    var blockCollided = false
    var groundCollided = false
    this.block = this.createBlock()

// <<<<<<< HEAD
//       this.draw(this.block)
      

//       console.log(blockCollided, groundCollided)
      
//       this.undraw(this.block)
//       this.block.updatePos(this.block.row +1, this.block.col)
//     }
// =======

    // while(collision == false){
      // setInterval(() => {
  // while(blockCollided == false && groundCollided == false){
     var loop = setInterval(()=> {
        console.log("block")
        this.draw(this.block)

       blockCollided = this.collisionBlock(this.block)
       groundCollided = this.collisionGround(this.block)
       
      if(blockCollided || groundCollided){ // stop loop if any collide condition returns true
          clearInterval(loop)
      }
       
        this.undraw(this.block)
        this.block.updatePos(this.block.row+1,this.block.col)
    }, 250)
 //  }
      // }, 250)

  }
    

  displayGrid(grid){
    term.moveTo(1,1) // always start from 0,0 position on terminal
    grid.forEach(function(row){
      term.colorRgb(0x33, 0xff , 0x88, row)
      term("\n")
    })
  }
  /*loop(block){
    var A = Collision
    Collision(block){
      (if gridRow + 1 == 1)
      createBlock()
    }


    while(A=True){

    }; (undraw(block);
      redraw(block) )

  }*/

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

/*  redraw(block){
    var gridRow = block.row
    var gridCol = block.col
    var grid = this.grid

      block.tetronimo.forEach(function(row,yPos){
      row.forEach(function(element, xPos){
        grid[yPos + gridRow][xPos + gridCol] = block.tetronimo[yPos+1][xPos]

    console.log(grid)
  })})}*/

 /* collision(block){
    while(A=no collision continue loop and then destruct block and new block)

  }*/

}



var my_grid = new Grid()
// console.log(Grid.createGrid())
//fct to generate blocks
//fct to check if it is filled.
