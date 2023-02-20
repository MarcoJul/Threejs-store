import Sizes from "../Utils/Sizes";

export default class Experience {
  constructor(canvas){
    this.canvas = canvas;

    this.sizes = new Sizes();

    // Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
  });
  }


  resize(){

  }

  update(){

  }
}