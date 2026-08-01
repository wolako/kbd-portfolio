import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SYSINFO } from '../../data/potfolio-data';
import { RevealDirective } from '../../directive/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  sysinfo = SYSINFO;
}