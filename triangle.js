let sides = [2, 2 ,2]; // use any sides

const triangleTypes = () => {
   if(sides[0] === sides[1] && sides[1] === sides[2]){ // all 3 sides equal = equilateral and isosceles
    console.log(`triangle of sides ${sides[0]}, ${sides[1]}, ${sides[2]} is an equilateral triangle and isosceles triangle`)
   }
   else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2])[   // any 2 sides equal = isoceles
    console.log(`triangle of sides ${sides[0]}, ${sides[1]}, ${sides[2]} is an isosceles triangle`)
   ]
   else {
    console.log(`triangle of sides ${sides[0]}, ${sides[1]}, ${sides[2]} is a scalene triangle`)  // 3 sides unequal = scalene
   }
    
   
}



const CheckTriangle = () => {
    // sum of any 2 sides greater then remaining side = triangle
    if (sides[0] + sides[1] > sides[2] || sides[0] + sides[2] > sides[1] || sides[1] + sides[2] > sides[0]){ 
        triangleTypes();
    }
    else {
        console.log('put valid sides!');
    }
}

CheckTriangle();