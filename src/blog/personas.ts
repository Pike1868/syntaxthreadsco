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
  'Rust Warrior': {
    display: 'Rust Warrior',
    initials: 'RS',
    avatar: undefined,
  },
  'Java Warrior': {
    display: 'Java Warrior',
    initials: 'JV',
    avatar: undefined,
  },
  'C# Warrior': {
    display: 'C# Warrior',
    initials: 'C#',
    avatar: undefined,
  },
};
