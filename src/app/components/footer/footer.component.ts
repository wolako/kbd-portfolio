import { Component } from '@angular/core';
import { PROFILE } from '../../data/potfolio-data';


@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  profile = PROFILE;
  year = new Date().getFullYear();
}