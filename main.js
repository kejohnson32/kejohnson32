import * as THREE from "./libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "./libs/CS559-Three/examples/jsm/controls/OrbitControls.js";
import { imageNames, findClosest } from "./helpers.js";
import { data } from "./data.js";

// setup play/pause button
let button = document.getElementById("button")
let play = false
button.onclick = () => {
    play = !play
}

// set up slider and change value on change
let slider = document.getElementById("slider")
let sliderVal = 2.5
slider.onchange = () => {
    sliderVal = slider.value
    time = timeMult / sliderVal // ensure ring stays at same location when slider changes
}

// setting everything up
const ratio = 4/5
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight / ratio, 1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight * ratio);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 1000);
controls.update();

// setting up a cube that will have different negz material for each image
let textureLoader = new THREE.TextureLoader()
let cube_materials = Array(5).fill(new THREE.MeshBasicMaterial({ color: "lightBlue", side: THREE.BackSide }))
let cube_geom = new THREE.BoxGeometry(1280, 720, 1000)
let materials = imageNames.map(im=> {
    let t = textureLoader.load(`./images/windsor/${im}`)
    t.wrapS = THREE.RepeatWrapping;
    t.repeat.x = - 1;
   return new THREE.MeshBasicMaterial({ map: t, side: THREE.BackSide })
})
let cube = new THREE.Mesh(cube_geom, [...cube_materials, materials[0]])
scene.add(cube)


// add blue data point spheres
const timeSeries = data.value.timeSeries[0].values[0].value
const values = timeSeries.map(ts => ts.value)
const dates = timeSeries.map(ts => new Date(ts.dateTime))
const testDates = dates.map((ts, idx) => idx - (dates.length-1)/2)

const data_mult = {x: 1 / 2.5, y: 1 / 8}

const point_geom = new THREE.SphereGeometry(5, 8)
const point_material = new THREE.MeshBasicMaterial({color:"blue"})
values.forEach((val, idx) => {
    const point = new THREE.Mesh(point_geom, point_material)
    point.position.set(testDates[idx]*data_mult.x, val*data_mult.y, 0)
    scene.add(point)
})

// add yellow image spheres
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

// add red ring showing current point
const current_geom = new THREE.TorusGeometry(50, 3, 12)
const current_material = new THREE.MeshBasicMaterial({color:"red"})
const current_point = new THREE.Mesh(current_geom, current_material)
current_point.position.set(testDates[0]*data_mult.x, values[0]*data_mult.y, 0)
current_point.rotateY(Math.PI/2)
scene.add(current_point)

// setup animation
let time = 0
let lastDataIndex = 0
let timeMult = 0

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    
    // play/pause control
    if (play) {
        time++
        timeMult = time * sliderVal
        // iterate through data point indices
        let dataIndex = Math.floor(timeMult % values.length)
        if(dataIndex != lastDataIndex){
            lastDataIndex = dataIndex
            // set new position of the red ring
            current_point.position.set(testDates[dataIndex]*data_mult.x, values[dataIndex]*data_mult.y, 0)
            // find image date that's closest to current data point date
            const closest = findClosest(dates[dataIndex], im_dates)
            // get the index of the closest image
            const im_index = im_dates.indexOf(closest)
            // reset the negz material with the closest image
            cube.material[5] = materials[im_index]
        }
    }
}

animate()
renderer.render(scene, camera);