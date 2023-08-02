import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-logo3d',
  templateUrl: './logo3d.component.html',
  styleUrls: ['./logo3d.component.scss']
})
export class Logo3dComponent implements OnInit {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  constructor(
  ) { }
  
  ngOnInit(): void {
    this.scene = new THREE.Scene();
  
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 10; 
  
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  
    const ambientLight = new THREE.AmbientLight(0xcccccc);
    this.scene.add(ambientLight);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 1, 1).normalize();
    this.scene.add(directionalLight);
      
    const loader = new GLTFLoader();
    loader.load(
      '../assets/3d/Logo2.glb',
      (gltf) => {
        gltf.scene.scale.set(0.8, 0.5, 0.8);
        gltf.scene.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.material = new THREE.MeshBasicMaterial({ color: 0x555555 });
          }
        });
        this.scene.add(gltf.scene);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
      },
      (error) => {
        console.log('Ocurrió un error al cargar el modelo', error);
      }
    );
  
    this.animate();
  }
  
  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

}
