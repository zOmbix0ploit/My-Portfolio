export type Theme = 'light' | 'dark';
export interface ProjectItem {
    id: string;
    index: string;
    title: string;
    subtitle: string;
    description: string;
    videoUrl: string;
    tags: string[];
    specs?: Record<string, string>;
    category: string;
    liveUrl?: string;
    detailsUrl?: string;
}
export interface ResearchStudy {
    id: string;
    code: string;
    tag: string;
    title: string;
    description: string;
    codeSnippet: string;
}
export interface PillarItem {
    number: string;
    name: string;
    description: string;
}
export interface SiteConfig {
    name: string;
    role: string;
    company: string;
    experienceYears: string;
    projectsCount: string;
    status: string;
    email: string;
    linkedinUrl: string;
    portalUrl: string;
    liveHubUrl: string;
    location: string;
}
