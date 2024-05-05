import * as THREE from "./libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "./libs/CS559-Three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight*2, 1, 10000 );

const renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement); 
const geometry = new THREE.BoxGeometry(10, 10, 10); 
const material = new THREE.MeshBasicMaterial({ color: "rgb(255, 255, 255, 0.05)" }); 
const cube = new THREE.Mesh(geometry, material); 
scene.add(cube); camera.position.z = 5; 

renderer.setSize( window.innerWidth, window.innerHeight/2 );
document.body.appendChild( renderer.domElement );


const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}
animate()

let loader = new THREE.CubeTextureLoader()
// all texture images for background in this exercise from here: https://github.com/mrdoob/three.js/tree/dev/examples/textures/cube/Bridge2
let background = loader.load([
  "./images/posx.jpg", "./images/negx.jpg", 
  "./images/posy.jpg", "./images/negy.jpg",
  "./images/posz.jpg", "./images/negz.jpg"
])
scene.background = background

console.log("test")

