import {Component, OnInit} from '@angular/core';
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {ModeratorSidebarComponent} from "../../commonComponents/moderator-sidebar/moderator-sidebar.component";
import {NgForOf, NgIf} from "@angular/common";
import {json} from "express";
import {CommonModule} from "@angular/common";
import {ThreeDViewerComponent} from "../../three-dviewer/three-dviewer.component";

@Component({
  selector: 'app-mod-manual-verify',
  standalone: true,
  imports: [
    CommonModule,
    AdminUserTableComponent,
    AdminnavbarComponent,
    ModeratorSidebarComponent,
    NgForOf,
    NgIf,
    ThreeDViewerComponent
  ],
  templateUrl: './mod-manual-verify.component.html',
  styleUrl: './mod-manual-verify.component.css'
})
export class ModManualVerifyComponent implements OnInit {
  models: any[] = []; // Initialize as an empty array
  color_bg=0xffffff
  constructor() {}

  ngOnInit(): void {


    // Optional: Handle case where data is undefined
    if (!history.state.data) {
      console.error('No data found in state!');
    }else console.log(history.state.data);
    this.models.push(history.state.data);
    // Simulating fetching JSON data dynamically
    // this.models = [
    //   {
    //     title: "test model",
    //     description: "tree",
    //     modelUrl: "http://localhost:3000/uploads/model_2024-12-01T02-29-15-383Z_2024-12-01T18-49-56-139Z.obj",
    //     image1Url: "http://localhost:3000/uploads/img (1)_7313_2024-12-01T18-51-16-247Z.png",
    //     downloadType: "Free",
    //     format: "obj",
    //     createdAt: "2024-12-01T18:51:16.319Z",
    //     model: {
    //       parameters: {
    //         Valid: false,
    //         Volume: [120.07894778520348, true],
    //         Centroid: [-0.00008117813792472932, 10.572018672501972, -0.3266893091936809],
    //         "Face Count": [48918, false],
    //         "Surface Area": [267.17847867213436, true],
    //         "Vertex Count": [24461, true],
    //         "File Size (MB)": [2.4621667861938477, true],
    //         "Watertight Status": true,
    //         "Bounding Box Dimensions": [11.685, 20.7407, 3.7701000000000002]
    //       },
    //       valid: false
    //     },
    //     modelOwner: {
    //       displayName: "Sineth Dhananjaya",
    //       biography: "Experienced software developer.",
    //       profilePicture: "https://example.com/profile.jpg",
    //       contactNumber: "+1234567890"
    //     }
    //   }
    // ];
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }
}


