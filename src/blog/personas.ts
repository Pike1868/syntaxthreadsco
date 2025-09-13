import type { Persona } from '@/blog/types';

type PersonaInfo = {
  display: string;
  avatar?: string; // optional image path
  initials: string;
};

export const PERSONAS: Record<Persona, PersonaInfo> = {
  'Python Warrior': {
    display: 'Python Warrior',
    initials: 'PY',
    avatar: undefined,
  },
  'TypeScript Strategist': {
    display: 'TypeScript Strategist',
    initials: 'TS',
    avatar: undefined,
  },
  'PHP Builder': {
    display: 'PHP Builder',
    initials: 'PHP',
    avatar: undefined,
  },
};

