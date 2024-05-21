import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mindcare-front';
  options = [
    //parte de psychologists
    { path: '/psychologist/patients', title:'Patients Cards', icon: 'https://github.com/aksoonie/mindcare-db/assets/134560396/88cc1678-c496-4575-ae36-de5f07c27265'},
    { path: '/psychologist/calendar', title:'Patients Cards', icon: 'https://github.com/aksoonie/mindcare-db/assets/134560396/76982bf3-a8b0-4592-855a-0ca4ad6c242b'},
    { path: '/psychologist/meetings', title:'Patients Cards', icon: 'https://github.com/aksoonie/mindcare-db/assets/134560396/e7d82f4a-d3a2-45d4-ac34-a0417b2bb4cc'},
    { path: '/psychologist/settings', title:'Patients Cards', icon: 'https://github.com/aksoonie/mindcare-db/assets/134560396/175bbaf6-db14-4ddb-af89-71b37d99e401'},
    //parte de patients
    { path: '/patient/psychologists', title:'Psychologists Cards', icon:'https://github.com/aksoonie/mindcare-db/assets/134560396/88cc1678-c496-4575-ae36-de5f07c27265'},
    { path: '/patient/calendar', title:'Psychologists Cards', icon:'https://github.com/aksoonie/mindcare-db/assets/134560396/76982bf3-a8b0-4592-855a-0ca4ad6c242b'},
    { path: '/patient/meetings', title:'Psychologists Cards', icon:'https://github.com/aksoonie/mindcare-db/assets/134560396/e7d82f4a-d3a2-45d4-ac34-a0417b2bb4cc'},
    { path: '/patient/notes', title:'Psychologists Cards', icon:'https://github.com/aksoonie/mindcare-db/assets/134560396/af426a68-1711-4a9a-89db-71f0d59ffbe7'},
    { path: '/patient/settings', title:'Psychologists Cards', icon: 'https://github.com/aksoonie/mindcare-db/assets/134560396/175bbaf6-db14-4ddb-af89-71b37d99e401'},
  ];
}
