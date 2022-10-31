let array = [ 1, 2, [ 3, 4, [ 5 ] ] ];
let flatarr = [].concat(...array)
flatarr = [].concat(...flatarr);
console.log(flatarr);