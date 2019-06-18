var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);
import CreateShape from './createShape';
import animate from './animate';

// animate();
class Initilize{
    constructor(){
         this.scene = new THREE.Scene();
         this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

         this.renderer = new THREE.WebGLRenderer();
         this.renderer.setSize(window.innerWidth, window.innerHeight);

         document.body.appendChild(this.renderer.domElement); 
         
         // camera position:
        this.camera.position.z = 5;

        let boxGeometry = new CreateShape().createBoxGeometry(this.scene);
        console.log(boxGeometry)

        this.scene.add(this.renderer, this.camera);

        this.render(this.renderer);

        new animate();
    }
    render(renderer){
        this.camera.lookAt(this.scene.position);
        renderer(this.scene, this.camera);
    }
}

export default Initilize;
