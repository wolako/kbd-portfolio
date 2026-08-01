import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoService } from '../../services/geo.service';
import { RevealDirective } from '../../directive/reveal.directive';
import { PROFILE } from '../../data/potfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  profile = PROFILE;

  constructor(public geo: GeoService) {}
}