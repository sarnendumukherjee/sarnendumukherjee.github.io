// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

  interface Contact {
    email: string;
    linkedin: string;
    github: string;
  }

  interface Project {
    name: string;
    description: string;
    url: string;
  }

  interface SkillGroup {
    category: string;
    technologies: string[];
  }

  interface Education {
    degree: string;
    institution: string;
    period: string;
  }

  interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
  }

  interface ResumeData {
    name: string;
    title: string;
    about: string;
    experience: Experience[];
    education: Education[];
    skills: SkillGroup[];
    projects: Project[];
    contact: Contact;
  }
}

export type { ResumeData };

declare module '$lib/data.json' {
  const data: ResumeData;
  export default data;
}

export {};