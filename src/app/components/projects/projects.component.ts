import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directive/reveal.directive';
import { ProjectItem, PROJECTS } from '../../data/potfolio-data';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = PROJECTS;

  statusLabel(p: ProjectItem): string {
    switch (p.status) {
      case 'live':
        return 'En ligne';
      case 'development':
        return 'En développement';
      default:
        return 'Projet technique';
    }
  }
}