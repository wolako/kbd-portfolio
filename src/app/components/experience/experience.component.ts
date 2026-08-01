import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES } from '../../data/potfolio-data';
import { RevealDirective } from '../../directive/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}