export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  categories: string[];
  summary: string;
  role: string;
  timeline: string;
  technologies: string[];
  heroAccent: string;
  caseStudy: CaseStudyContent;
}

export interface CaseStudyContent {
  problem: {
    statement: string;
    frictionPoints: string[];
    insight: string;
  };
  user: {
    targetAudience: string[];
    userNeeds: string[];
    corePersona: {
      name: string;
      role: string;
      quote: string;
    };
  };
  userFlow: {
    steps: {
      stepNumber: string;
      title: string;
      description: string;
    }[];
    comparison: {
      traditional: string[];
      streamlined: string[];
    };
  };
  wireframes: {
    rationale: string;
    keyDecisions: string[];
  };
  visualDesign: {
    designSystem: string;
    palette: { name: string; hex: string }[];
    typography: string;
    keyHighlights: string[];
  };
  development: {
    stack: string[];
    architectureDescription: string;
    architectureNodes: {
      layer: string;
      tech: string;
      role: string;
    }[];
    featuresImplemented: string[];
  };
  challenges: {
    challenge: string;
    solution: string;
  };
  finalProduct: {
    description: string;
    screens: {
      title: string;
      description: string;
      previewType: 'carwash-booking' | 'carwash-status' | 'studysync-workspace' | 'studysync-tutor';
    }[];
  };
  whatILearned: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  question: string;
  explanation: string;
  action: string;
}

export interface Principle {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverable: string;
}

export interface ToolCategory {
  category: string;
  items: {
    name: string;
    description: string;
    level: string;
  }[];
}

export interface BuildingItem {
  name: string;
  tagline: string;
  status: string;
  currentMilestone: string;
  tags: string[];
}

export interface Experiment {
  id: string;
  title: string;
  description: string;
  tag: string;
  tech: string;
}

export interface CursorState {
  type: 'default' | 'project' | 'link' | 'explore' | 'hidden';
  text?: string;
}
