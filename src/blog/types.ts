import { ReactNode } from 'react';

export type Persona = 'Python Warrior' | 'TypeScript Strategist' | 'PHP Builder';

export interface PostMeta {
  title: string;
  slug: string;
  date: string; // ISO
  excerpt: string;
  tags: string[];
  persona: Persona;
  cover?: string; // optional cover image path
}

export interface PostModule {
  meta: PostMeta;
  Content: () => ReactNode;
}
