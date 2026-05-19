export interface SearchEntry {
  id: string;
  sectionId: string;
  sectionLabel: string;
  title: string;
  content: string;
  subSectionId?: string | null;
  resultType?: 'section' | 'subsection' | 'reference';
}

export interface SearchResult extends SearchEntry {
  score: number;
  excerpt: string;
}
