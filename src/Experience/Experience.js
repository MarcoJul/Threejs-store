import Sizes from "../Utils/Sizes";
import Time from "../Utils/Time";

let instance = null;

export default class Experience {
  constructor(canvas){

    //Singleton
    if(instance) return instance;

    instance = this;

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