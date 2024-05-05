import * as THREE from "./libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "./libs/CS559-Three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight*2, 1, 10000 );

const renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement); 

let img_path = "./images/windsor/Yahara_Windsor___2019-03-12_19-00-01-2859-05-00.jpg"

let textureLoader = new THREE.TextureLoader()
let t  = textureLoader.load(img_path)

let cube_materials = Array(5).fill(new THREE.MeshBasicMaterial({color: "white", side:THREE.BackSide}))
cube_materials.push(new THREE.MeshBasicMaterial({map:t, side:THREE.BackSide}))
let cube_geom = new THREE.BoxGeometry(1280, 720, 1000)
let background = new THREE.Mesh(cube_geom, cube_materials)
scene.add(background)


renderer.setSize( window.innerWidth, window.innerHeight/2 );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 0, 500 );
controls.update();

function animate() {
	requestAnimationFrame( animate );
	// required if controls.enableDamping or controls.autoRotate are set to true

	controls.update();
	renderer.render( scene, camera );
}
animate()
