import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-model2',
  standalone: true,
  templateUrl: './model2.component.html',
  styleUrls: ['./model2.component.css']
})
export class Model2Component implements OnInit, AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private mixer!: THREE.AnimationMixer;
  private clock!: THREE.Clock;
  private model!: THREE.Group;
  private skeleton!: THREE.SkeletonHelper;
  private actions!: THREE.AnimationAction[];

  private idleAction!: THREE.AnimationAction;
  private walkAction!: THREE.AnimationAction;
  private runAction!: THREE.AnimationAction;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.init();
    }
  }

  private init(): void {
    const container = this.rendererContainer.nativeElement;

    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
    this.camera.position.set(-3, 1, 3); // Front view position
    this.camera.lookAt(0, 2, 0); // Look at the model's center

    this.clock = new THREE.Clock();

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xa00000, 10, 50);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
    hemiLight.position.set(0, 20, 0);
    this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(-3, 10, -10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 0;
    dirLight.shadow.camera.bottom = -2;
    dirLight.shadow.camera.left = -2;
    dirLight.shadow.camera.right = 5;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 40;
    this.scene.add(dirLight);

    // Ground
    // const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 4), new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false, transparent: true, opacity: 0.06 }));
    // mesh.rotation.x = -Math.PI / 2;
    // mesh.receiveShadow = true;
    // this.scene.add(mesh);

    // GLTF model loader
    const loader = new GLTFLoader();
    const modelPath = 'assets/models/RobotExpressive.glb';
    loader.load(
      modelPath,
      (gltf) => {
        this.model = gltf.scene;
        this.scene.add(this.model);

        this.model.traverse((object) => {
          if ((object as THREE.Mesh).isMesh) (object as THREE.Mesh).castShadow = true;
        });

        const scaleFactor = 0.5; // Smaller scale factor
        this.model.scale.set(scaleFactor, scaleFactor, scaleFactor);

        this.skeleton = new THREE.SkeletonHelper(this.model);
        this.skeleton.visible = false;
        this.scene.add(this.skeleton);

        const animations = gltf.animations;
        this.mixer = new THREE.AnimationMixer(this.model);

        this.idleAction = this.mixer.clipAction(animations[0]);
        this.walkAction = this.mixer.clipAction(animations[6]);
        this.runAction = this.mixer.clipAction(animations[1]);

        this.actions = [this.idleAction, this.walkAction, this.runAction];

        this.activateAllActions();
        this.renderer.setAnimationLoop(() => this.animate());
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total! * 100) + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x000000, 0); // Fully transparent background
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);

    // Add OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 1, 0); // Adjust controls to center on model
    this.controls.update();
    this.controls.enableZoom = false; // Disable zooming

    window.addEventListener('resize', () => this.onWindowResize());
  }

  private onWindowResize(): void {
    const container = this.rendererContainer.nativeElement;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  private activateAllActions(): void {
    this.setWeight(this.idleAction, 0);
    this.setWeight(this.walkAction, 1);
    this.setWeight(this.runAction, 0);
    this.actions.forEach((action: THREE.AnimationAction) => {
      action.play();
    });
  }

  private setWeight(action: THREE.AnimationAction, weight: number): void {
    action.enabled = true;
    action.setEffectiveTimeScale(1);
    action.setEffectiveWeight(weight);
  }

  private animate(): void {
    const dt = this.clock.getDelta();
    this.mixer.update(dt);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
