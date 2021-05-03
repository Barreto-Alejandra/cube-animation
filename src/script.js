import './style.css'
import * as THREE from 'three'
import { Clock } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


//--time
// let time = Date.now()

// or use

//--Clock
const clock = new THREE.Clock()

//animation
const tick = () => {

    //--time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

    //--update object with time
    // mesh.rotation.y += 0.001 * deltaTime


    //--clock
    const elapsedTime = clock.getElapsedTime()
    console.log(elapsedTime)

    //--update object with clock
    // mesh.rotation.y = elapsedTime

    //--other option for object anim (use one or both)
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)

    // or with camera

    //--other option for object anim (use one or both)
     camera.position.y = Math.sin(elapsedTime)
     camera.position.x = Math.cos(elapsedTime)
     camera.lookAt(mesh.position)

    //renderer
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)

}

tick()