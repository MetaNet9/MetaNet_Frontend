import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

@Component({
  selector: 'app-upload-form',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent, SelectButtonModule, CommonModule, FormsModule],
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements AfterViewInit {
  Object = Object;
  formData: any = {
    title: '',
    description: '',
    category: '',
    tags: '',
    downloadType: 'Free',
    license: '',
    format: '',
    price: 0,
    images: [],
    modelFile: null,
  };

  modelPreviewUrl: string | null = null;
  modelParameters: any = null;
  loadingParameters = false;
  isModelUploaded = false;
  private readonly modelUploadUrl = 'http://localhost:3000/upload/model';
  private readonly imageUploadUrl = 'http://localhost:3000/upload/image';
  private readonly submitUrl = 'http://localhost:3000/vebxrmodel/';
  private readonly moderatorRequestUrl = 'http://localhost:3000/request-moderator';

  @ViewChild('modelPreviewCanvas', { static: false }) modelPreviewCanvas!: ElementRef<HTMLCanvasElement>;

  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private renderer: THREE.WebGLRenderer | null = null;
  private controls: OrbitControls | null = null;
  private model: THREE.Object3D | null = null;
  isValidModel: boolean | null = null;

  constructor() {}

  ngAfterViewInit() {
    if (this.modelPreviewCanvas) {
      this.initThreeJS();
    }
  }

  private initThreeJS(): void {
    if (!this.modelPreviewCanvas?.nativeElement) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.modelPreviewCanvas.nativeElement.clientWidth / 400, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.modelPreviewCanvas.nativeElement });
    this.renderer.setSize(this.modelPreviewCanvas.nativeElement.clientWidth, 400);
    this.camera.position.z = 5;

    const light = new THREE.AmbientLight(0xffffff);
    this.scene.add(light);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableRotate = true;
    this.controls.enableZoom = true;

    const animate = () => {
      requestAnimationFrame(animate);
      if (this.controls) this.controls.update();
      this.renderer?.render(this.scene!, this.camera!);
    };
    animate();
  }

  private loadModel(file: File): void {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension) return;

    const reader = new FileReader();

    reader.onload = (event: any) => {
      const result = event.target.result;
      let loader: any;

      if (fileExtension === 'glb' || fileExtension === 'gltf') {
        loader = new GLTFLoader();
        loader.parse(result, '', (gltf: any) => {
          this.clearScene();
          this.model = gltf.scene;
          if (this.model) {
            if (this.model) {
              if (this.model) {
                this.scene?.add(this.model);
              }
            }
          }
          this.isModelUploaded = true;
        });
      } else if (fileExtension === 'obj') {
        loader = new OBJLoader();
        const obj = loader.parse(result);
        this.clearScene();
        this.model = obj;
        if (this.model) {
          if (this.model) {
            if (this.model) {
              this.scene?.add(this.model);
            }
          }
        }
        this.isModelUploaded = true;
      } else {
        alert('Unsupported file format');
      }
    };

    if (fileExtension === 'obj') reader.readAsText(file);
    else reader.readAsArrayBuffer(file);
  }

  private clearScene(): void {
    while (this.scene?.children.length) {
      this.scene?.remove(this.scene.children[0]);
    }
  }

  onFileSelect(event: any, type: string): void {
    const files = event.target.files;

    if (type === 'model') {
      if (files && files[0]) {
        this.formData.modelFile = files[0];
        this.isModelUploaded = false;
        this.loadModel(files[0]);
      }
    } else if (type === 'images') {
      if (files.length > 0) {
        this.formData.images = Array.from(files).slice(0, 3);
      }
    }
  }

  async uploadModel(): Promise<string> {
    if (!this.formData.modelFile) {
      alert('Please select a model to upload!');
      return '';
    }
  
    const formData = new FormData();
    formData.append('file', this.formData.modelFile);
  
    try {
      this.loadingParameters = true;
  
      const response = await fetch(this.modelUploadUrl, {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload the model file');
      }
  
      const result = await response.json();
      this.modelParameters = result.savedModel.parameters;
  
      // Update the validity status based on the response
      this.isValidModel = result.savedModel.valid;
  
      return result.fileAccessUrl;
    } catch (error) {
      console.error('Error uploading model:', error);
      alert('Failed to upload the model. Please try again.');
      return '';
    } finally {
      this.loadingParameters = false;
    }
  }
  
  // Function to request moderator review
  async requestModeratorReview(): Promise<void> {
    try {
      const response = await fetch(this.moderatorRequestUrl, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          modelId: this.formData.modelFile?.id // Replace with actual model identifier
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (!response.ok) {
        throw new Error('Failed to request moderator review');
      }
  
      alert('Request sent to moderator successfully!');
    } catch (error) {
      console.error('Error requesting moderator review:', error);
      alert('Failed to request moderator review. Please try again.');
    }
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    const modelUrl = await this.uploadModel();

    if (!modelUrl) {
      alert('Model upload failed.');
      return;
    }

    const formData = { ...this.formData, modelFile: modelUrl };

    try {
      const response = await fetch(this.submitUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Failed to submit the form');

      alert('Model uploaded successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form.');
    }
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
