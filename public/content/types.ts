export enum Technology {
  bash = "bash",
  html = "html",
  mongo = "mongo",
  next = "next",
  node = "node",
  python = "python",
  react = "react",
  sass = "sass",
  stripe = "stripe",
  typescript = "typescript",
  langchain = "langchain",
  p5 = "p5",
}

export interface Project {
  title: string;
  timeCreated: string;
  url?: string;
  sourceCodeUrl?: string;
  images: Array<string>;
  slides: Array<string>;
  stack: Array<Technology>;
}

export enum BlogPostPlatform {
  Dev = "Dev",
  Replit = "Replit",
}

export interface LazyBlogPost {
  target: string;
  platform: BlogPostPlatform;
}

export enum SocialPlatform {
  Twitter,
  Dev,
  Replit,
  Email,
  Polywork,
  Discord,
  Codepen,
  Github,
  Youtube,
  Codingame,
}

export interface Social {
  url: string;
  platform: SocialPlatform;
}

export interface BlogPost {}
