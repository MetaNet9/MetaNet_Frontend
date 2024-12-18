import { Component, ElementRef, OnInit, AfterViewInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';


@Component({
  standalone: true,
  selector: 'app-three-d-viewer',
  templateUrl: './three-dviewer.component.html',
  styleUrls: ['./three-dviewer.component.css']
})
export class ThreeDViewerComponent implements OnInit, AfterViewInit {
  // @Input() modelUrl: string = 'http://localhost:3000/uploads/model_2024-12-01T02-29-15-383Z.obj';
  // @Input() modelUrl: string = 'http://localhost:3000/uploads/herbie_the_love_bug_2024-12-01T05-13-26-023Z.glb';
  @Input() modelUrl: string = '';
  @Input() color_bg:number  =0x00001a;
  @Input() width = 400;
  @Input() height = 400;

  size: number = 0


  constructor(
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.init3DViewer();
    }
  }

  init3DViewer(): void {
    let modelREF: THREE.Object3D | null = null;
    const container = this.elRef.nativeElement.querySelector('.viewer-container');

    // Scene
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xf0f0f0); // Light gray background
    scene.background = new THREE.Color(this.color_bg); // Light gray background

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.z = 100;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(this.width, this.height);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft ambient light
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1); // Directional light (sunlight)
    directionalLight1.position.set(5, 5, 5).normalize();
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8); // Add second directional light from the other side
    directionalLight2.position.set(-5, -5, -5).normalize();
    scene.add(directionalLight2);

    // Add Point Light for backlight
    const pointLight = new THREE.PointLight(0xffffff, 1, 10);
    pointLight.position.set(0, 0, -2); // Point light placed at the back of the model
    scene.add(pointLight);

    // Optional: Spotlight for additional effect
    const spotlight = new THREE.SpotLight(0xffffff, 1);
    spotlight.position.set(10, 10, 10);
    spotlight.castShadow = true;
    scene.add(spotlight);

    // Hemisphere Light for balanced front and back lighting
    const hemisphereLight = new THREE.HemisphereLight(0x606060, 0x404040, 1); // Lights the top and bottom
    hemisphereLight.position.set(0, 10, 0);
    scene.add(hemisphereLight);

    // Loader
    const loader = this.getLoader(this.modelUrl);

    loader.load(
      this.modelUrl,
      (object: THREE.Object3D) => {
        // Check if it's a GLTF object and handle accordingly
        if (object instanceof THREE.Group || (object as any).scene) {
          // Handle GLTF scene if present
          const model = (object as any).scene ? (object as any).scene : object;
          modelREF=model;

          // Compute bounding box of the model
          const box = new THREE.Box3().setFromObject(model);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          // Reposition the model to center it in the scene
          // model.position.x -= center.x;
          // model.position.y -= center.y;
          // model.position.z -= center.z;

          this.size = Math.max(size.z, size.y, size.x)
          runAnimation()
          //Camera Position: 1.037624207443426, 20.88440636040267, 24.07223165866557
          //Camera Rotation: -0.24198931504696503, -0.005746296144976582, -0.0014183275707196983
          // camera.position.set(1.037624207443426, 20.88440636040267, 24.07223165866557)

          // Set camera position based on the size of the model

          console.log(this.size)
          camera.position.z = this.size ;
          camera.position.y = size.y ;
          camera.position.x = size.x+10;

           // Rotate camera slightly for better view
           // Look at the model

          // Add object to the scene
          scene.add(model);
        } else {
          // For non-GLTF models like OBJ, directly add them
          scene.add(object);
        }
      },
      (xhr: ProgressEvent) => {
        console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error: ErrorEvent) => {
        console.error('An error occurred', error);
      }
    );

    // OrbitControls for rotation, zoom, and pan
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;


    // controls.addEventListener('change', () => {
    //   console.log(`Camera Position: ${camera.position.x}, ${camera.position.y}, ${camera.position.z}`);
    //   console.log(`Camera Rotation: ${camera.rotation.x}, ${camera.rotation.y}, ${camera.rotation.z}`);
    // })
      // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update(); // Update controls
      renderer.render(scene, camera);
    };
    animate();
    const runAnimation = () => {
      console.log(this.size)
      let scaler = 8-this.size
      if(this.size>8){
          scaler = 1.5
      }
      if (modelREF) {
        gsap.to(modelREF.scale, { x: scaler, y: scaler, z: scaler, duration: 2, ease: 'power1.inOut' });
        gsap.to(modelREF.rotation, { y: Math.PI * 2, duration: 2, ease: 'power1.inOut' });
        gsap.to(modelREF.position, { x: 2, duration: 2, ease: 'power1.inOut' });
      }
    };
  }


  getLoader(url: string): any {
    console.log('Model URL:', url); // Debugging line to log the model URL

    if (url.endsWith('.gltf') || url.endsWith('.glb')) {
      return new GLTFLoader();
    } else if (url.endsWith('.obj')) {
      return new OBJLoader();
    }

    // Add a default fallback if the model format is unsupported
    console.error('Unsupported model format for URL:', url);
    throw new Error('Unsupported model format');
  }
}
