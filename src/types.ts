export interface SkillItem {
  id: string;
  name: string;
  category: string;
  proficiency: number; // 0 - 100
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  client: string;
  category: 'Brand Film' | 'Motion Graphics' | 'Social Media Campaign' | 'Commercial' | 'Product Video' | 'Kinetic Typography';
  year: string;
  description: string;
  deliverables: string[];
  tools: string[];
  duration?: string;
  aspectRatio: string;
  thumbnail: string;
  videoPlaceholderUrl?: string;
  highlightStat?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  verified?: boolean;
}

export interface ClientItem {
  name: string;
  description: string;
  sector: string;
  highlight?: boolean;
}
