import Sizes from "../Utils/Sizes";
import Time from "../Utils/Time";

export default class Experience {
  constructor(canvas){
    this.canvas = canvas;

    this.sizes = new Sizes();
    this.time = new Time();

    // Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
    }); 

    this.time.on("tick", () =>{
      this.update();
    })
  
  }

  resize(){

  }

  update(){
    
  }
}