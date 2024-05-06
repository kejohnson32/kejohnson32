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

let textureLoader = new THREE.TextureLoader()
let cube_materials = Array(5).fill(new THREE.MeshBasicMaterial({ color: "lightGrey", side: THREE.BackSide }))
let cube_geom = new THREE.BoxGeometry(1280, 720, 1000)
let cubes = imageNames.map(im => {
    console.log('im :>> ', im);
    let t = textureLoader.load(`./images/windsor/${im}`)
    t.wrapS = THREE.RepeatWrapping;
    t.repeat.x = - 1;
    let material = new THREE.MeshBasicMaterial({ map: t, side: THREE.BackSide })
    return new THREE.Mesh(cube_geom, [...cube_materials, material])
})

scene.add(cubes[0])

let time = 0
let lastIndex = 0

function animate() {
    requestAnimationFrame(animate);
    time++
    let index = Math.floor(time / 50 % 100)
    if (index != lastIndex) {
        lastIndex++
        scene.add(cubes[index])
    }
    controls.update();
    renderer.render(scene, camera);
}
animate()