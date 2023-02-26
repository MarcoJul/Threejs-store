import * as THREE from 'three';

import Camera from "./Camera";
import Renderer from './Renderer';
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import World from './World/World';
import Environment from './World/Environment';
import Debug from './Utils/Debug';

let instance = null;

export default class Experience {
  constructor(canvas){

    //Singleton
    if(instance) return instance;

    instance = this;

    // Options

    this.canvas = canvas;

    // Setup
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();

    this.renderer = new Renderer();
    this.world = new World();
    this.environment = new Environment();



    // Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
    }); 

    this.time.on("tick", () =>{
      this.update();
    })
  
  }

  resize(){
    this.camera.resize();
    this.renderer.resize();

  }

  update(){
    this.camera.update();
    this.renderer.update();
    this.environment.update();
  }
}