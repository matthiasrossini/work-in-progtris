var Grid = {

  createGrid: function(){

    var height = 20
    var width = 10

    var grid = [];
    for (var row = 0; row < height; row ++){
      grid[row] = []
      for (var col = 0; col < width; col ++){
        grid[row][col] = 0
      }

    }
    return grid
  }
}

console.log(Grid.createGrid())
