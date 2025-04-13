import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule, } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';

const materialModules = [
  MatIconModule, MatCardModule, MatStepperModule, MatButtonModule, MatTooltipModule, ProgressBarComponent
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: materialModules,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  skills = [
    { skill: 'HTML', progress: '95'},
    { skill: 'CSS and SCSS', progress: '90'},
    { skill: 'Javascript', progress: '85'},
    { skill: 'Typescript', progress: '85'},
    { skill: 'Angular', progress: '90'},
    { skill: 'Bootstrap', progress: '90'},
    { skill: 'Angular Material', progress: '80'}
  ];
}
