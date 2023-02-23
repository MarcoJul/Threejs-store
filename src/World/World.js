import * as THREE from 'three';
import Experience from "../Experience";
import Environment from './Environment';

export default class World {
  constructor() {
    this.experience = new Experience();

    this.scene = this.experience.scene;
    
    //Basic Cube
    const testMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(2, 2, 4, 32),
      new THREE.MeshBasicMaterial({color: 0xff0000})
    )
    testMesh.position.set(0,0,0);

    this.scene.add(testMesh);

    this.environment = new Environment();
  }
  
}