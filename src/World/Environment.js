import * as THREE from 'three';
import Experience from '../Experience';

export default class Environment {
  constructor() {

    this.experience = new Experience();
    this.scene = this.experience.scene;
  
    this.setLight();
    this.setSunLight();
  }


  setLight() {
    this.instance = new THREE.PointLight(0xff0000, 5, 3);
    this.instance.position.set(-1, 0, -5);

    this.scene.add(this.instance);

    const sphereSize = 1; 
    const pointLightHelper = new THREE.PointLightHelper( this.instance, sphereSize ); 
    // this.scene.add( pointLightHelper );


    const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.12);
    // this.scene.add(ambientLight);

  }

  setSunLight(){
    this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
         this.sunLight.castShadow = true
         this.sunLight.shadow.camera.far = 15
         this.sunLight.shadow.mapSize.set(1024, 1024)
         this.sunLight.shadow.normalBias = 0.05
         this.sunLight.position.set(3.5, 2, - 1.25)
        //  this.scene.add(this.sunLight);
  }
}