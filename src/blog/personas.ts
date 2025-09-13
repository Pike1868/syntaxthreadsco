import type { Persona } from '@/blog/types';

type PersonaInfo = {
  display: string;
  avatar?: string; // optional image path
  initials: string;
  blurb?: string; // short subtle description for byline/about box
};

export const PERSONAS: Record<Persona, PersonaInfo> = {
  'Monty Python': {
    display: 'Monty Python',
    initials: 'MP',
    avatar: undefined,
    blurb: 'Practical, calm, readability-first. Subtle Monty humor—always clear and approachable.'
  },
  'Typey Tim': {
    display: 'Typey Tim',
    initials: 'TT',
    avatar: undefined,
    blurb: 'Contract-first and scale-minded. Types as design; product calm over code chaos.'
  },
  'Hypertext Harry': {
    display: 'Hypertext Harry',
    initials: 'HH',
    avatar: undefined,
    blurb: 'Web-native pragmatist. Ships fast, keeps it simple, and lets results do the talking.'
  },
  'Ferris Rustman': {
    display: 'Ferris Rustman',
    initials: 'FR',
    avatar: undefined,
    blurb: 'Systems, safety, and speed—with dry wit and a very helpful compiler at their side.'
  },
  'Java the Hut': {
    display: 'Java the Hut',
    initials: 'JH',
    avatar: undefined,
    blurb: 'Pragmatic OOP and JVM portability. Enterprise calm with subtle humor.'
  },
  'Dotnet Dave': {
    display: 'Dotnet Dave',
    initials: 'DD',
    avatar: undefined,
    blurb: 'Modern .NET: expressive and productive. Strong types, friendly tone, few surprises.'
  },
};
