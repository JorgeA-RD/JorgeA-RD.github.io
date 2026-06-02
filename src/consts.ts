// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Jorge Armando Ramírez Díaz';
export const SITE_DESCRIPTION = 'Academic portfolio of Jorge Armando Ramírez Díaz: artificial intelligence, robotics, reinforcement learning, and human motor intention.';

export const CV_URL = '/cv-jorge-armando-ramirez-diaz.pdf';

export const CONTACT = {
  organization: 'Universidad Autónoma de Querétaro',
  addressLines: [
    'Facultad de Ingeniería',
    'Querétaro, Mexico',
  ],
  emails: [
    'jorge.armando.ramirez.diaz@uaq.edu.mx',
    'jorge.ramirez@cinvestav.mx',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=IeO98t0AAAAJ&hl=en',
    icon: 'scholar',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0000-0002-9606-2526',
    icon: 'website',
  },
  {
    label: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Jorge-Ramirez-68',
    icon: 'website',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/JorgeA-RD',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jorge-rd/',
    icon: 'linkedin',
  },
  {
    label: 'X / El Robot Barato',
    href: 'https://x.com/robot_barato',
    icon: 'twitter',
  },
  {
    label: 'Instagram / El Robot Barato',
    href: 'https://www.instagram.com/robot_barato/',
    icon: 'website',
  },
  {
    label: 'Email',
    href: 'mailto:jorge.armando.ramirez.diaz@uaq.edu.mx',
    icon: 'email',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Astro Scholar by Shravan Goswami',
  designerUrl: 'https://shravangoswami.com/astro-scholar/',
  sourceLabel: 'Theme source',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};
