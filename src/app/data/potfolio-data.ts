export interface SkillGroup {
  path: string;
  label: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  current?: boolean;
  type?: 'work' | 'education';
  bullets?: string[];
}

export interface ProjectItem {
  name: string;
  status: 'live' | 'technical' | 'development';
  tagline: string;
  description: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
  featured?: boolean;
}

export const PROFILE = {
  name: 'Koffi Benoît Dzahini',
  handle: 'koffibenoît',
  host: 'dzahini',
  title: 'Administrateur Systèmes & Réseaux — Développeur Web',
  tagline:
    "J'assure la fiabilité des infrastructures et je construis les applications qui tournent dessus.",
  location: 'Lomé, Togo',
  email: 'kbdzahini@gmail.com',
  phone: '+228 90 47 88 14',
  availability: 'Disponible',
  cvFile: 'assets/cv/cv_kbdzahini.pdf',
};

export const STAT_WIDGETS = [
  { value: '3 ans', label: 'exp. cumulée' },
  { value: '3 OS', label: 'Windows · Linux · macOS' },
  { value: '2026', label: 'stack à jour' },
];

export const SYSINFO = [
  { key: 'user', value: 'koffibenoît@dzahini' },
  { key: 'role', value: 'sysadmin → développeur' },
  { key: 'os', value: 'Windows, Linux (Ubuntu), macOS' },
  { key: 'stack', value: 'Angular · Node.js · Python' },
  { key: 'uptime', value: '~3 ans (2017 – présent)' },
  { key: 'locale', value: 'Lomé, TG' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    path: '~/systeme',
    label: 'Systèmes & Réseaux',
    items: [
      'Windows Server 2019',
      'Linux (Debian, Ubuntu, RHEL)',
      'macOS',
      'Proxmox / VMware / VirtualBox',
      'CCNA/CCNP, BGP, OSPF, VLAN',
      'VPN IPSec/SSL, pfSense, OPNsense',
      'Docker, Kubernetes, Ansible',
    ],
  },
  {
    path: '~/developpement',
    label: 'Développement Web',
    items: [
      'Angular (Components, RxJS)',
      'Node.js / Express (REST API)',
      'JavaScript (ES6)',
      'Python — intermédiaire',
      'MySQL / PostgreSQL / Prisma ORM',
      'Git / GitHub',
    ],
  },
  {
    path: '~/ia-outils',
    label: 'IA & Outils modernes',
    items: [
      'Claude Code',
      'Claude AI',
      'Vibe coding',
      'Prometheus / Grafana',
      'Cacti (SNMP, RRDTool)',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Développement autodidacte & veille technologique',
    org: 'Projets personnels',
    period: 'Avril 2024 — Présent',
    current: true,
    bullets: [
      "Conception d'applications web avec Angular et Express.js (interface responsive, API REST).",
      "Déploiement d'une infrastructure mail containerisée sécurisée (Docker, Postfix/Dovecot, SSL/TLS).",
      'Montée en compétences en Python et exploration du développement assisté par IA (Claude Code, Claude AI).',
    ],
  },
  {
    role: 'Support IT Junior',
    org: 'CAMINFO',
    period: 'Février 2022 — Mars 2024',
    bullets: [
      'Installation, configuration et maintenance de serveurs Linux et Windows Server 2019.',
      "Virtualisation (Proxmox, VMware ESXi) et haute disponibilité des infrastructures clients.",
      'Support utilisateur niveau 1/2 : assistance technique et résolution d’incidents.',
    ],
  },
  {
    role: 'Technicien Support',
    org: 'Café Informatique & Télécommunication',
    period: 'Mars 2021 — Décembre 2021',
    bullets: [
      'Supervision du backbone réseau via UNMS, dépannage du réseau C@fenet.',
      'Configuration d’équipements MikroTik et assistance téléphonique clients.',
    ],
  },
  {
    role: 'Technicien Réseau',
    org: 'ONG Carrefour Tiers Monde',
    period: 'Mars 2017 — Mai 2017',
    bullets: [
      'Câblage et configuration d’équipements réseau (routeurs, switchs, serveurs).',
      'Déploiement de protocoles de sécurité (SSH, IPTables) et de serveurs web (Apache, Nginx).',
    ],
  },
  {
    role: 'Licence en Informatique Réseaux et Télécommunications',
    org: "ESGIS — École Supérieure de Gestion, d'Informatique et des Sciences, Lomé",
    period: '2013 — 2016',
    type: 'education',
  },
  {
    role: 'Baccalauréat, Mathématiques et Sciences de la Nature',
    org: 'Collège Polyvalent Saint-Esprit, Kpalimé',
    period: '2011 — 2012',
    type: 'education',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    name: 'eMozozo',
    status: 'live',
    featured: true,
    tagline: 'Plateforme de réservation de billets de bus',
    description:
      "Application web de réservation de trajets en bus au Togo. Les compagnies de transport créent leur compte, publient leurs trajets avec dates de départ, tarifs et nombre de sièges disponibles. Les clients consultent les trajets, choisissent leur numéro de siège et achètent leur billet en ligne via un paiement sécurisé (FedaPay). Tableaux de bord dédiés pour les compagnies et l'administration.",
    stack: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'SQL natif'],
    link: 'https://emozozo.com/',
    linkLabel: 'Visiter le site',
  },
  {
    name: 'Marketplace Multi-Vendeurs',
    status: 'development',
    tagline: 'E-commerce avec 3 modes de paiement',
    description:
      "Application e-commerce multi-vendeurs avec trois moyens de paiement (Mobile Money, carte bancaire, paiement à la livraison) et un calcul de frais de livraison basé sur la distance routière réelle. Tableaux de bord dédiés pour les vendeurs et l'administration.",
    stack: ['Angular', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL'],
  },
  {
    name: 'AutoLocation',
    status: 'development',
    tagline: 'Plateforme de vente et location de véhicules',
    description:
      "Application de mise en relation pour la vente et la location de véhicules. Gestion des annonces avec photos, recherche filtrée par marque/modèle/prix/localisation, réservation en ligne et suivi des locations.",
    stack: ['Angular', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL'],
  },
  {
    name: 'Resto-Traiteur',
    status: 'development',
    tagline: 'Commande en ligne type Uber Eats',
    description:
      "Application de commande en ligne pour restaurants et traiteurs. Gestion des menus, panier d'achat, suivi des commandes en temps réel, système de livraison avec géolocalisation. Interface client et dashboard restaurateur.",
    stack: ['Angular', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL'],
  },
  {
    name: 'Infrastructure Mail Containerisée',
    status: 'technical',
    tagline: 'Stack mail sécurisée en conteneurs',
    description:
      "Déploiement d'une stack mail complète (Roundcube, Dovecot, Postfix) en conteneurs Docker, avec chiffrement SSL/TLS et intégration à un reverse proxy Nginx existant.",
    stack: ['Docker', 'Postfix', 'Dovecot', 'Nginx', "Let's Encrypt"],
  },
];