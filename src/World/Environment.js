import * as THREE from 'three';
import Experience from '../Experience';

export default class Environment {
  constructor() {

    this.experience = new Experience();
    this.scene = this.experience.scene;
  
    this.setLight();
  }


  setLight() {
    this.instance = new THREE.PointLight(0xff9000, 0.5);
    this.instance.position.set(1, - 0.5, 1);

    this.scene.add(this.instance);
  }
}