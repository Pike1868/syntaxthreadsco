import type { Persona } from '@/blog/types';

type PersonaInfo = {
  display: string;
  avatar?: string; // optional image path
  initials: string;
};

export const PERSONAS: Record<Persona, PersonaInfo> = {
  'Monty Python': {
    display: 'Monty Python',
    initials: 'MP',
    avatar: undefined,
  },
  'Typey Tim': {
    display: 'Typey Tim',
    initials: 'TT',
    avatar: undefined,
  },
  'Hypertext Harry': {
    display: 'Hypertext Harry',
    initials: 'HH',
    avatar: undefined,
  },
  'Ferris Rustman': {
    display: 'Ferris Rustman',
    initials: 'FR',
    avatar: undefined,
  },
  'Java the Hut': {
    display: 'Java the Hut',
    initials: 'JH',
    avatar: undefined,
  },
  'Dotnet Dave': {
    display: 'Dotnet Dave',
    initials: 'DD',
    avatar: undefined,
  },
};
