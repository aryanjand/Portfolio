export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: ProjectAvailable | null;
};

type ProjectAvailable = {
  github: boolean;
  demo: boolean;
};
