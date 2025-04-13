import { animate, style, transition, trigger } from '@angular/animations';
import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  animations: [
    trigger('progressAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)'}),
        animate('1s ease-in-out', style({ transform: 'translateX(0%)'}))
      ])
    ])
  ]
})
export class ProgressBarComponent {
  @Input() progress: any;

}
