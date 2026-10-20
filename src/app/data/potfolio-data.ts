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
  handle: 'koffibenoit',
  host: 'dzahini',
  title: 'Technicien Systèmes & Réseaux — Développeur Web',
  tagline:
    "J'assure la fiabilité des infrastructures et je construis les applications qui tournent dessus.",
  location: 'Lomé, Togo',
  email: 'kbdzahini@gmail.com',
  phone: '+228 90 47 88 14',
  availability: 'Disponible',
  cvFile: 'assets/cv/CV_Koffi_Benoit_DZAHINI',
};

export const STAT_WIDGETS = [
  { value: '3 ans', label: 'systèmes & réseaux' },
  { value: '3 OS', label: 'Windows · Linux · macOS' },
  { value: '4 apps web', label: 'dont 1 en production' },
];

export const SYSINFO = [
  { key: 'user', value: 'koffibenoit@dzahini' },
  { key: 'role', value: 'support IT / sysadmin → développeur web' },
  { key: 'os', value: 'Windows, Linux (Ubuntu), macOS' },
  { key: 'stack', value: 'Angular · Node.js · PostgreSQL · Docker' },
  { key: 'uptime', value: '~3 ans (2021 – 2024) · freelance depuis 2024' },
  { key: 'locale', value: 'Lomé, TG' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    path: '~/systeme',
    label: 'Systèmes & Virtualisation',
    items: [
      'Windows Server 2019/2022/2025',
      'Active Directory, GPO',
      'DNS, DHCP, RDP',
      'Linux (Ubuntu, Debian, CentOS)',
      'macOS',
      'Proxmox / VMware ESXi / Hyper-V / VirtualBox',
      'Sauvegardes (données et serveurs)',
    ],
  },
  {
    path: '~/reseaux',
    label: 'Réseaux & Sécurité',
    items: [
      'Routing & Switching : BGP, OSPF, EIGRP, VLAN',
      'Cisco (acquis CCNA, labos)',
      'MikroTik',
      'VPN IPSec/SSL',
      'pfSense, OPNsense',
      'SSH, IPTables',
    ],
  },
  {
    path: '~/supervision-deploiement',
    label: 'Supervision & Déploiement',
    items: [
      'Prometheus / Grafana',
      'Cacti (SNMP, RRDTool)',
      'Docker, Docker Compose',
      'Nginx',
      'VPS Linux (Ubuntu)',
    ],
  },
  {
    path: '~/developpement',
    label: 'Développement Web',
    items: [
      'Angular, TypeScript',
      'Node.js / Express (API REST)',
      'JavaScript (ES6), HTML & CSS',
      'Python (en progression)',
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
      'Développement assisté par IA',
      'Prototypage rapide',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Développeur Freelance',
    org: 'Projets informatiques',
    period: '2024 — Présent',
    current: true,
    bullets: [
      "Conception et développement d'applications web avec Angular, Node.js/Express et PostgreSQL.",
      "Développement d'API REST et intégration de bases de données.",
      'Déploiement et maintenance sur VPS Linux avec Docker, Docker Compose et Nginx.',
      "Gestion autonome des projets, de l'analyse du besoin jusqu'au déploiement.",
    ],
  },
  {
    role: 'Autoformation & veille technologique',
    org: 'Laboratoires et projets personnels',
    period: '2024 — Présent',
    bullets: [
      'Laboratoires virtuels Windows Server et Linux (Active Directory, GPO, DNS) pour entretenir mes compétences systèmes et réseaux.',
      "Serveur mail en production sur VPS : infrastructure containerisée (Docker, Postfix/Dovecot/Roundcube, Nginx, SSL/TLS Let's Encrypt).",
      'Montée en compétences en Python et exploration du développement assisté par IA (Claude Code, Claude AI).',
    ],
  },
  {
    role: 'Support IT Junior',
    org: 'CAMINFO',
    period: 'Février 2022 — Mars 2024',
    bullets: [
      'Installation, configuration et maintenance de serveurs Linux et Windows Server 2019, en environnement multiclient.',
      'Maintien en conditions opérationnelles des infrastructures clients.',
      'Gestion des équipements réseau (routeurs, switchs, pare-feux) ; administration de base Active Directory et GPO.',
      'Redondance des services pour améliorer la disponibilité.',
      'Virtualisation (Proxmox, VMware ESXi, Hyper-V, VirtualBox) : déploiement de VM Windows Server, Debian, Ubuntu, CentOS.',
      'Assistance à distance des utilisateurs et des environnements clients.',
    ],
  },
  {
    role: 'Technicien Support',
    org: 'Café Informatique & Télécommunication',
    period: 'Mars 2021 — Décembre 2021',
    bullets: [
      'Premiers dépannages et suivi des incidents réseau ; surveillance du backbone via UNMS.',
      'Configuration et maintenance de routeurs et switchs MikroTik ; administration d’un serveur Ubuntu.',
      'Assistance téléphonique clients (diagnostic des problèmes de connexion) et appui à distance aux techniciens terrain.',
    ],
  },
  {
    role: 'Technicien Réseau',
    org: 'ONG Carrefour Tiers Monde',
    period: 'Mars 2017 — Mai 2017',
    bullets: [
      'Câblage et configuration d’équipements réseau (routeurs, switchs, serveurs).',
      'Accès sécurisés SSH, règles de pare-feu IPTables, serveurs web Apache et Nginx.',
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
      "Application web de réservation de trajets en bus au Togo. Les compagnies de transport créent leur compte, publient leurs trajets avec dates de départ, tarifs et nombre de sièges disponibles. Les clients consultent les trajets, choisissent leur numéro de siège et achètent leur billet en ligne via un paiement sécurisé (CinetPay). Tableaux de bord dédiés pour les compagnies et l'administration.",
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
    tagline: 'Stack mail sécurisée, en production sur VPS',
    description:
      "Serveur mail complet (Postfix, Dovecot, Roundcube) déployé en production sur un VPS Linux avec Docker et Docker Compose. Nginx en reverse proxy, communications sécurisées par SSL/TLS (Let's Encrypt).",
    stack: ['Docker', 'Postfix', 'Dovecot', 'Roundcube', 'Nginx', "Let's Encrypt"],
  },
];