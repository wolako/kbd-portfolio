import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE, STAT_WIDGETS } from '../../data/potfolio-data';
import { GeoService } from '../../services/geo.service';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  profile = PROFILE;
  stats = STAT_WIDGETS;

  typed = '';
  showAnswer = false;
  private fullCommand = 'whoami';

  constructor(public geo : GeoService){}
  
  ngOnInit(): void {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      this.typed = this.fullCommand;
      this.showAnswer = true;
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i++;
      this.typed = this.fullCommand.slice(0, i);
      if (i >= this.fullCommand.length) {
        clearInterval(interval);
        setTimeout(() => (this.showAnswer = true), 300);
      }
    }, 110);
  }
}