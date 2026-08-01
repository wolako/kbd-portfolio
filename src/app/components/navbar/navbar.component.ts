import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE } from '../../data/potfolio-data';


interface TabDef {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  profile = PROFILE;

  // Liens desktop (le logo fait déjà office de lien "accueil")
  desktopLinks = [
    { id: 'about', label: 'about', href: '#about' },
    { id: 'skills', label: 'skills', href: '#skills' },
    { id: 'experience', label: 'experience', href: '#experience' },
    { id: 'projects', label: 'projets', href: '#projects' },
    { id: 'contact', label: 'contact', href: '#contact' },
  ];

  // Onglets mobile (5 max, convention app native)
  mobileTabs: TabDef[] = [
    { id: 'top', label: 'Accueil', icon: 'bi-house-fill' },
    { id: 'skills', label: 'Compétences', icon: 'bi-cpu-fill' },
    { id: 'experience', label: 'Parcours', icon: 'bi-briefcase-fill' },
    { id: 'projects', label: 'Projets', icon: 'bi-grid-fill' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope-fill' },
  ];

  // Toutes les sections suivies par l'observateur (superset desktop + mobile)
  private watchIds = ['top', 'about', 'skills', 'experience', 'projects', 'contact'];
  private currentSectionId = 'top';

  desktopActiveIndex = -1;
  mobileActiveIndex = 0;

  private observer?: IntersectionObserver;
  private sections: HTMLElement[] = [];
  private locked = false;
  private lockTimer?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    setTimeout(() => this.setupObserver(), 150);
  }

  private setupObserver(): void {
    this.sections = this.watchIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!this.sections.length) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.locked) return;
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry;
          }
        }
        if (best) {
          this.setActiveSection(best.target.id);
        }
      },
      { threshold: [0.1, 0.25, 0.5, 0.75], rootMargin: '-56px 0px -40% 0px' }
    );

    this.sections.forEach((s) => this.observer!.observe(s));
  }

  private setActiveSection(id: string): void {
    this.currentSectionId = id;

    // desktop : -1 si on est sur le hero (aucun lien "accueil" dans le nav desktop)
    this.desktopActiveIndex = this.desktopLinks.findIndex((l) => l.id === id);

    // mobile : "top" ET "about" pointent tous les deux vers l'onglet Accueil
    const mobileId = id === 'about' ? 'top' : id;
    const idx = this.mobileTabs.findIndex((t) => t.id === mobileId);
    if (idx !== -1) this.mobileActiveIndex = idx;
  }

  select(mobileIndex: number): void {
    this.mobileActiveIndex = mobileIndex;
    this.locked = true;
    clearTimeout(this.lockTimer);
    this.lockTimer = setTimeout(() => {
      this.locked = false;
    }, 700);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    clearTimeout(this.lockTimer);
  }
}