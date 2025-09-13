import { ReactNode } from 'react';

export type Persona =
  | 'Monty Python'
  | 'Typey Tim'
  | 'Hypertext Harry'
  | 'Ferris Rustman'
  | 'Java the Hut'
  | 'Dotnet Dave';

export interface PostMeta {
  title: string;
  slug: string;
  date: string; // ISO
  excerpt: string;
  tags: string[];
  persona: Persona;
  cover?: string; // optional cover image path
  references?: Array<{
    title: string;
    url: string;
    source?: string;
  }>;
}

export interface PostModule {
  meta: PostMeta;
  Content: () => ReactNode;
}
