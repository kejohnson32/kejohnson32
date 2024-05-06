import * as THREE from "./libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "./libs/CS559-Three/examples/jsm/controls/OrbitControls.js";
import { imageNames, findClosest } from "./helpers.js";
import { data } from "./data.js";

let button = document.getElementById("button")
let play = false
button.onclick = () => {
    play = !play
}

// setting everything up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight * 4 / 3, 1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight * 3 / 4);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 500);
controls.update();

// setting up a cube for each image
let textureLoader = new THREE.TextureLoader()
let cube_materials = Array(5).fill(new THREE.MeshBasicMaterial({ color: "lightGrey", side: THREE.BackSide }))
let cube_geom = new THREE.BoxGeometry(1280, 720, 1000)
let cubes = imageNames.map(im => {
    let t = textureLoader.load(`./images/windsor/${im}`)
    t.wrapS = THREE.RepeatWrapping;
    t.repeat.x = - 1;
    let material = new THREE.MeshBasicMaterial({ map: t, side: THREE.BackSide })
    return new THREE.Mesh(cube_geom, [...cube_materials, material])
})
scene.add(cubes[0])

const data_mult = {x: 1 / 2.5, y: 1 / 8}

// add data points
const timeSeries = data.value.timeSeries[0].values[0].value
const values = timeSeries.map(ts => ts.value)
console.log('values :>> ', values);
const dates = timeSeries.map(ts => new Date(ts.dateTime))
const testDates = dates.map((ts, idx) => idx - (dates.length-1)/2)

const point_geom = new THREE.SphereGeometry(5, 8)
const point_material = new THREE.MeshBasicMaterial({color:"blue"})
values.forEach((val, idx) => {
    const point = new THREE.Mesh(point_geom, point_material)
    point.position.set(testDates[idx]*data_mult.x, val*data_mult.y, 0)
    scene.add(point)
})

// add image spheres
const im_dates = imageNames.map(im=>{
    const datePart = im.split("___")[1].replace(".jpg","")
    return new Date(datePart.substring(0,4), Number(datePart.substring(5,7))-1, datePart.substring(8,10), datePart.substring(11,13), datePart.substring(14,16), datePart.substring(17,19))
})
const im_geom = new THREE.SphereGeometry(10, 8)
const im_material = new THREE.MeshBasicMaterial({color:"orange"})

im_dates.forEach(im=>{
    const point = new THREE.Mesh(im_geom, im_material)
    const closest = findClosest(im, dates)
    const closest_date_idx = dates.indexOf(closest)
    point.position.set(testDates[closest_date_idx]*data_mult.x, values[closest_date_idx]*data_mult.y, 0)
    scene.add(point)
})

let time = 0
let lastIndex = 0
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);

    if (play) {
        time++
        let index = Math.floor(time / 50 % 100)
        if (index != lastIndex) {
            lastIndex++
            scene.add(cubes[index])
        }
    }
}

animate()
renderer.render(scene, camera);