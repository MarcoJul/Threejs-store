import * as THREE from 'three';
import Experience from '../Experience';

export default class Environment {
  constructor() {

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;
  
    this.setLight();
    this.setSunLight();
  }


  setLight() {
    this.lightGroup = new THREE.Group();
    this.instance = new THREE.PointLight(0xff0000, 4, 3);
    this.instance2 = new THREE.PointLight(0xff0000, 4, 3);
    this.instance3 = new THREE.PointLight(0xff0000, 4, 3);
    this.instance4 = new THREE.PointLight(0xff0000, 4, 3);
    this.instance5 = new THREE.PointLight(0xff0000, 4, 3);
    this.instance6 = new THREE.PointLight(0xff0000, 4, 3);
    this.instance7 = new THREE.PointLight(0xff0000, 4, 3);
    this.instance8 = new THREE.PointLight(0xff0000, 4, 3);

    console.log(Math.cos(Math.PI));

    const middlePosition = Math.cos(Math.PI*0.25)*5;

    this.instance.position.set(5, 0.5, 0);
    this.instance2.position.set(middlePosition, -0.5, middlePosition);
    this.instance3.position.set(0, 0.5, 5);
    this.instance4.position.set(- middlePosition, -0.5, middlePosition);
    this.instance5.position.set(-5, 0.5, 0);
    this.instance6.position.set(- middlePosition, -0.5, -middlePosition);
    this.instance7.position.set(0, 0.5, -5);
    this.instance8.position.set(middlePosition, -0.5, -middlePosition);

    this.lightGroup.add(this.instance, this.instance2, this.instance3, this.instance4, this.instance5, this.instance5, this.instance6, this.instance7, this.instance8);

    const sphereSize = 1; 
    const pointLightHelper = new THREE.PointLightHelper( this.instance, sphereSize ); 
    const pointLightHelper2 = new THREE.PointLightHelper( this.instance2, sphereSize ); 
    const pointLightHelper3 = new THREE.PointLightHelper( this.instance3, sphereSize ); 
    const pointLightHelper4 = new THREE.PointLightHelper( this.instance4, sphereSize ); 
    const pointLightHelper5 = new THREE.PointLightHelper( this.instance5, sphereSize ); 
    const pointLightHelper6 = new THREE.PointLightHelper( this.instance6, sphereSize ); 
    const pointLightHelper7 = new THREE.PointLightHelper( this.instance7, sphereSize ); 
    const pointLightHelper8 = new THREE.PointLightHelper( this.instance8, sphereSize ); 
    // this.scene.add( 
    //   pointLightHelper, 
    //   pointLightHelper2, 
    //   pointLightHelper3, 
    //   pointLightHelper4, 
    //   pointLightHelper5, 
    //   pointLightHelper6, 
    //   pointLightHelper7, 
    //   pointLightHelper8 
    //   );

    this.scene.add(this.lightGroup);
    // const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.12);
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

  update() {
    
    // this.instance.position.x = 5 * Math.sin(this.time.elapsed * 0.01);
    // this.instance.position.z = 5 * Math.cos(this.time.elapsed * 0.01);
    // console.log(this.instance.position.x);

    this.lightGroup.rotation.y = Math.PI * this.time.elapsed * 0.006;
    console.log(this.time.elapsed)

    // this.instance2.position.x = 5 * (Math.sin(this.time.elapsed * 0.02));
    // this.instance2.position.z = 5 * (Math.cos(this.time.elapsed * 0.02));
  }
}