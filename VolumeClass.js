class main { // parent class to store values 
   
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

}

class cylinder extends main{ // child class1
    constructor(radius,height){
        super(radius, height);
    }
   
    
    getVolume(){
        const vol = 3.14 * this.radius * this.radius *  this.height ;
        console.log(vol.toFixed(4));
    }
}

  
class sphere extends main{   // child class2
    constructor(radius){
        super(radius);
    }
   
    
    getVolume(){
        const vol = (4/3) * 3.14 * this.radius * this.radius * this.radius;
        console.log(vol.toFixed(4));
    }
}

class cone extends main{  // child class3
    constructor(radius,height){
        super(radius, height);
    }
   
    
    getVolume(){
        const vol = (1/3) * 3.14 * this.radius * this.radius * this.height ;
        console.log(vol.toFixed(4));
    }
}



const cylinder1 = new cylinder(4,5);
cylinder1.getVolume();

const sphere1 = new sphere(2);
sphere1.getVolume();

const cone1 = new cone(2 ,5);
cone1.getVolume();