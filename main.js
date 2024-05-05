import * as THREE from "./libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "./libs/CS559-Three/examples/jsm/controls/OrbitControls.js";
import { imageNames } from "./helpers.js";
import { data } from "./data.js";

// setting everything up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight * 4 / 3, 1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight * 3 / 4);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 0, 500);
controls.update();

// adding the large cube 
let img_path = `./images/windsor/${imageNames[4]}`
let textureLoader = new THREE.TextureLoader()
let t = textureLoader.load(img_path)
t.wrapS = THREE.RepeatWrapping;
t.repeat.x = - 1;
let cube_materials = Array(5).fill(new THREE.MeshBasicMaterial({ color: "lightGrey", side: THREE.BackSide }))
cube_materials.push(new THREE.MeshBasicMaterial({ map: t, side: THREE.BackSide }))
let cube_geom = new THREE.BoxGeometry(1280, 720, 1000)
let background = new THREE.Mesh(cube_geom, cube_materials)
scene.add(background)

function animate() {
    requestAnimationFrame(animate);

    controls.update();
    renderer.render(scene, camera);
}
animate()

console.log('data :>> ', data);