var canvas = document.getElementByID("Grid")

var ctx = canvas.GetContext("2d")
// here we are getting a 2D drawing context for HTML

var width = 10
var height = 20
var pixelsz =24
// do we have to write again the variables here ?

canvas.width = pixelsz * width
canvas.height = pixelsz * height
//setting the how big the pixels should be in the HTML display

function DrawSquare(x, y){
  //shall we also crate a class here ?
  //I guess thats the only function we need to draw the pixels
  ctx.fillRect(x * pixelsz, y * pixelsz, pixelsz, pixelsz)
  // dont know why we had to repeat the pixelsz variable 2 times
  // x and y are the postion we want to draw the tile.
  // So we just multiply it by the dimension of the pixels we want, and it will be passed to the function fillRect
  ss = ctx.strokeStyle
  // not sure why the guy who wrote this assigned this to a variable -> oneNote
  ctx.strokeStyle = "#555"
  // for colours:https://en.wikipedia.org/wiki/Web_colors#Hex_triplet
  ctx.strokeRect(x * pixelsz, y * pixelsz, pixelsz, pixelsz)
  ctx.strokeStyle = '#888'
  ctx.strokeRect(x * pixelsz + 3 * pixelsz/8, y * pixelsz + 3 * pixelsz/8, pixelsz 4, pixelsz 4)
  // here basically samo samo from above. This part is not really well explained in github so I wasnt able to understand what I was programming here
  // and again, I dont know why we have to repeat it the variavles at the end inside the method
}
