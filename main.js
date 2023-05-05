import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xcccccc );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const shapeGeometry = new THREE.BoxGeometry(5, 2, 2);
    const shapeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    const shape = new THREE.Mesh(shapeGeometry, shapeMaterial);
    scene.add(shape);
    var light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.y = 10;
    scene.add(light);

    var light2 = new THREE.DirectionalLight(0xffffff, .5);
    light2.position.set(-10,-10, 10);
    scene.add(light2);
    var light3 = new THREE.DirectionalLight(0xffffff, .5);
    light3.position.set(30,-10, -10);
    scene.add(light3);

    camera.position.z = 15;
    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    const colorButton = document.getElementById('color-button');
    colorButton.addEventListener('click', () => {
      const randomColor = Math.random() * 0xffffff;
      shape.material.color.setHex(randomColor);
    });
