var Grid = {

  init: function(){
  this.width = 10
  this.height= 20
    this.grid = this.createGrid()
  },

  createGrid: function(){


    var grid = [];
    for (var row = 0; row < this.height; row ++){
      grid[row] = []
      for (var col = 0; col < this.width; col ++){
        grid[row][col] = 0
      }
    }
    console.log(grid)
    return grid   
  },

  checkCompleteLines: function() {
      this.grid.ForEach(function(item){
        if (item.reduce((a, b) => a + b, 0) == this.width){
          grid.splice[item, 1]
          grid.splice
          
        }

        //item.ForEach(function(iteminlist))
        //iteminlist = 0. (therowbefore)

        //item = item before. 
  

    })
      return grid
    }
}


var my_grid = new Grid()
// console.log(Grid.createGrid())
//fct to generate blocks
//fct to check if it is filled. 



