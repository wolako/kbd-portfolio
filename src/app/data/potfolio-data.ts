export interface SkillGroup {
  path: string;
  label: string;
  /** Pratiqué en production / en mission */
  items: string[];
  /** Labo & formation */
  lab?: string[];
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
  linkedin: 'https://linkedin.com/in/koffi-benoît-dzahini',
  availability: 'Disponible',
  cvFile: 'assets/cv/CV_Koffi_Benoit_dzahini.pdf',
};

export const STAT_WIDGETS = [
  { value: '3 ans', label: "d'expérience cumulée" },
  { value: '3 OS', label: 'Windows · Linux · macOS' },
  { value: '2', label: 'projets en ligne' },
];

export const SYSINFO = [
  { key: 'user', value: 'koffibenoit@dzahini' },
  { key: 'role', value: 'technicien systèmes & réseaux · dev web' },
  { key: 'os', value: 'Windows, Linux (Ubuntu), macOS' },
  { key: 'stack', value: 'Angular · Node.js · PostgreSQL · Docker' },
  { key: 'uptime', value: '3 ans cumulés · freelance dev depuis 2024' },
  { key: 'locale', value: 'Lomé, TG' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    path: '~/systeme',
    label: 'Systèmes & Virtualisation',
    items: [
      'Windows Server 2019',
      'Active Directory, GPO, DNS, DHCP',
      'Partages de fichiers, droits NTFS',
      'Linux (Ubuntu)',
      'VirtualBox',
    ],
    lab: [
      'Windows Server 2022/2025',
      'RDP, serveur d\'impression',
      'Debian, CentOS',
      'Proxmox, VMware ESXi, Hyper-V',
      'Bash, PowerShell',
      'Veeam (sauvegardes)',
      'Installation et déploiement de postes',
    ],
  },
  {
    path: '~/reseaux',
    label: 'Réseaux & Sécurité',
    items: ['MikroTik'],
    lab: [
      'Wi-Fi',
      'Routing & Switching : BGP, OSPF, EIGRP, VLAN',
      'Cisco (acquis CCNA)',
      'VPN IPSec/SSL',
      'pfSense, OPNsense',
      'SSH, IPTables',
    ],
  },
  {
    path: '~/supervision-deploiement',
    label: 'Déploiement & Supervision',
    items: ['Docker', 'Nginx', 'VPS Linux (Ubuntu)'],
    lab: ['Prometheus, Grafana', 'Cacti (SNMP, RRDTool)'],
  },
  {
    path: '~/developpement',
    label: 'Développement Web',
    items: [
      'Angular, TypeScript',
      'Node.js / Express (API REST)',
      'JavaScript, HTML & CSS',
      'MySQL / PostgreSQL / Prisma ORM',
      'Git / GitHub',
      'Développement assisté par IA (Claude Code)',
    ],
    lab: ['Python (en progression)'],
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
      "Réalisation et mise en ligne d'une plateforme de réservation de billets de bus (eMozozo) avec paiement en ligne.",
      'Déploiement et maintenance sur VPS Linux avec Docker, Docker Compose et Nginx.',
      "Gestion autonome des projets, de l'analyse du besoin jusqu'au déploiement.",
    ],
  },
  {
    role: 'Autoformation & laboratoires',
    org: 'Projets personnels',
    period: '2024 — Présent',
    bullets: [
      'Laboratoires Windows Server 2022/2025, scripting Bash et PowerShell, sauvegardes Veeam, installation et déploiement de postes.',
      'Laboratoires sur mon poste : virtualisation (Proxmox, VMware ESXi, Hyper-V, VirtualBox) avec VM Windows Server, Debian, Ubuntu et CentOS.',
      'Laboratoires réseau et sécurité : routage et commutation (BGP, OSPF, EIGRP, VLAN), VPN, pfSense/OPNsense, supervision Prometheus/Grafana.',
      "Serveur mail en production sur VPS : infrastructure containerisée (Docker, Postfix/Dovecot/Roundcube, Nginx, SSL/TLS Let's Encrypt).",
      'Montée en compétences en Python et exploration du développement assisté par IA (Claude Code, Claude AI).',
    ],
  },
  {
    role: 'Support IT Junior',
    org: 'CAMINFO — prestataire de services informatiques',
    period: 'Février 2022 — Mars 2024',
    bullets: [
      "Support et maintenance sur le terrain, sur site et à distance, auprès d'entreprises clientes de 10 à 20 employés, avec des serveurs Ubuntu et un serveur Windows Server 2019 chez un client.",
      "Besoin de centraliser les utilisateurs et les accès chez un client → installation d'Active Directory (utilisateurs, groupes, unités d'organisation, GPO) et mise en place des partages de fichiers → comptes et accès aux ressources centralisés.",
      "Client ne parvenant pas à se connecter à ses ressources → assistance de l'utilisateur pour la connexion → connexion établie et accès à ses ressources.",
      "Configuration et maintenance des serveurs ; configuration et gestion de routeurs, switchs et pare-feux ; maintien en conditions opérationnelles des infrastructures clients.",
      "Mise en place de solutions de redondance pour améliorer la disponibilité des services.",
    ],
  },
  {
    role: 'Technicien Support',
    org: 'Café Informatique & Télécommunication (fournisseur d’accès Internet)',
    period: 'Mars 2021 — Décembre 2021',
    bullets: [
      "Équipements réseau en panne sur le backbone → surveillance via UNMS, détection et remise en service → connexion rétablie pour les clients.",
      "Connexion de clients à améliorer → redémarrage ciblé de serveurs, routeurs et équipements → connexion améliorée.",
      "Techniciens en intervention chez un client ou sur un site de la société, besoin d'aide pour configurer un équipement réseau → assistance par téléphone → équipement configuré.",
      "Premiers dépannages et suivi des incidents réseau ; assistance téléphonique aux clients pour diagnostiquer et résoudre leurs problèmes de connexion.",
      "Configuration et maintenance de routeurs MikroTik"
    ],
  },
  {
    role: 'Technicien Réseau',
    org: 'ONG Carrefour Tiers Monde',
    period: 'Mars 2017 — Mai 2017',
    bullets: [
      "Câblage et configuration d'équipements réseau (routeurs, switchs, serveurs).",
      "Accès sécurisés SSH, règles de pare-feu IPTables",
      "Configuration des serveurs web Apache et Nginx.",
      "Formation d'apprenants aux outils Microsoft Office.",
      "Maintenance d'ordinateurs."
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
    name: 'Infrastructure Mail Containerisée',
    status: 'technical',
    featured: true,
    tagline: 'Stack mail sécurisée, en production sur VPS',
    description:
      "Serveur mail complet (Postfix, Dovecot, Roundcube) déployé en production sur un VPS Linux avec Docker et Docker Compose. Nginx en reverse proxy, communications sécurisées par SSL/TLS (Let's Encrypt).",
    stack: ['Docker', 'Postfix', 'Dovecot', 'Roundcube', 'Nginx', "Let's Encrypt"],
  },
  {
    name: 'eMozozo',
    status: 'live',
    tagline: 'Réservation de billets de bus — en ligne, lancement en pause',
    description:
      "Application web de réservation de trajets en bus au Togo, développée pour un porteur de projet et mise en ligne ; le lancement commercial est actuellement en pause. Les compagnies publient leurs trajets (dates, tarifs, sièges disponibles) ; les clients choisissent leur siège et achètent leur billet en ligne via un paiement sécurisé (CinetPay). Tableaux de bord pour les compagnies et l'administration.",
    stack: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'SQL natif'],
    link: 'https://emozozo.com/',
    linkLabel: 'Visiter le site',
  },
];