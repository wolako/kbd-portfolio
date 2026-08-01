import { Injectable, signal } from '@angular/core';

/**
 * Détecte si le visiteur se trouve en Afrique via géolocalisation IP
 * (service gratuit ipwho.is, aucune clé requise).
 *
 * isAfrica() renvoie :
 *   - null  tant que la détection n'est pas terminée
 *   - true  si le visiteur est en Afrique
 *   - false si le visiteur est hors d'Afrique
 *
 * En cas d'échec (API indisponible, bloquée par un bloqueur de trackers...),
 * on considère par défaut que le visiteur EST en Afrique : mieux vaut
 * afficher le bouton en trop que d'en priver quelqu'un par erreur technique.
 */
@Injectable({ providedIn: 'root' })
export class GeoService {
  readonly isAfrica = signal<boolean | null>(null);

  constructor() {
    this.detect();
  }

  private async detect(): Promise<void> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch('https://ipwho.is/', { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!res.ok) throw new Error('geo lookup failed');
      const data = await res.json();

      this.isAfrica.set(data?.continent_code === 'AF');
    } catch {
      this.isAfrica.set(true);
    }
  }
}