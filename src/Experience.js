import * as THREE from 'three';

import Camera from "./Camera";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";

let instance = null;

export default class Experience {
  constructor(canvas){

    //Singleton
    if(instance) return instance;

    instance = this;

    // Options

    this.canvas = canvas;

    // Setup

    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();

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