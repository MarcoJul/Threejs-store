import * as THREE from 'three';
import Experience from "../Experience";

export default class World {
  constructor() {
    this.experience = new Experience();

    this.scene = this.experience.scene;
    
    //Basic Cube
    const testMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(7,7, 3, 32),
      new THREE.MeshStandardMaterial({color: 0x333333})
    )
    testMesh.material.side = THREE.DoubleSide;
    testMesh.position.set(0,0,0);
    testMesh.castShadow = true;

    this.scene.add(testMesh);

  }
  
}