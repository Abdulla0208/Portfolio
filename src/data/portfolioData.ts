import { Project, ProcessStep, Principle, ToolCategory, BuildingItem, Experiment } from '../types';

export const PERSONAL_INFO = {
  name: 'Shaik Abdulla',
  title: 'UX / Product Designer + Frontend Developer',
  tagline: "DESIGNER'S EYE. ENGINEER'S MIND.",
  heroHeading: 'I DESIGN DIGITAL PRODUCTS THAT FEEL AS GOOD AS THEY WORK.',
  heroSecondary: 'UX / PRODUCT DESIGN + FRONTEND DEVELOPMENT',
  heroSupport: 'Computer Science & Engineering graduate focused on creating thoughtful user experiences and turning them into functional digital products.',
  status: 'AVAILABLE FOR OPPORTUNITIES',
  location: 'Hyderabad, India',
  email: 'abdullashaik0208@gmail.com',
  github: 'https://github.com/Abdulla0208',
  linkedin: 'https://www.linkedin.com/in/shaikabdulla26/',
  bio: `I am a Computer Science graduate who fell in love with the intersection where human psychology, visual systems, and frontend engineering collide. 
  
Rather than seeing design and code as separate silos, I bridge both: understanding why a product should exist, mapping intuitive workflows in Figma, and engineering them into performant, accessible React and Next.js applications. 

As an early-career builder, I do not pretend to have a decade of corporate tenure. What I bring is deep technical curiosity, strong product intuition, obsessive attention to visual detail, and the relentless discipline to ship clean code that actually solves user friction.`,
};

export const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'THINK',
    headline: 'Understand the user and the problem.',
    description: 'Every interaction begins before the first line of code or Figma frame. I dissect core user goals, identify friction points, and ask why the solution deserves to exist.',
    deliverable: 'Problem definition, user flows, and information hierarchy.'
  },
  {
    number: '02',
    title: 'DESIGN',
    headline: 'Turn complexity into intuitive experiences.',
    description: 'Transforming messy business logic and dense workflows into calm, tactile interfaces with deliberate whitespace, mathematical typography, and purposeful motion.',
    deliverable: 'Figma prototypes, design tokens, component systems, and edge-case specs.'
  },
  {
    number: '03',
    title: 'BUILD',
    headline: 'Bring the experience to life with clean frontend engineering.',
    description: 'Bridging the design-to-code gap without fidelity loss. Writing clean TypeScript, semantic markup, reactive state management, and accessible responsive layouts.',
    deliverable: 'Production-ready React/Next.js code, robust APIs, and fluid 60fps micro-interactions.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'al-farah',
    number: '01',
    title: 'AL FARAH',
    subtitle: 'Mobile Car Wash Booking Platform',
    tagline: 'Eliminating the friction of manual booking via WhatsApp and calls through a frictionless on-demand digital experience.',
    categories: ['UX', 'PRODUCT DESIGN', 'FRONTEND', 'FULL STACK'],
    summary: 'A full-stack on-demand mobile service booking platform designed to replace manual, error-prone WhatsApp coordination with an intuitive 4-step booking workflow, dynamic vehicle pricing, and operational tracking.',
    role: 'Sole Product Designer & Full-Stack Developer',
    timeline: 'Product Concept & Full Build',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Lucide Icons'],
    heroAccent: '#C8FF00',
    caseStudy: {
      problem: {
        statement: 'Booking a mobile car wash was completely reliant on phone calls or back-and-forth WhatsApp chats, leading to lost inquiries, scheduling collisions, and manual price calculations.',
        frictionPoints: [
          'Unstructured WhatsApp messages requiring manual confirmations and address clarifications.',
          'Customers having to ask "How much for my SUV?" due to lack of transparent service tiers.',
          'No real-time visibility into whether a technician was dispatched or service was completed.',
          'Double-booking slots during peak weekend morning windows.'
        ],
        insight: 'Car owners value predictability and speed: they want to select their car type, see the exact price upfront, pick a slot, and get confirmed in under 90 seconds.'
      },
      user: {
        targetAudience: [
          'Busy working professionals with limited time for detailing visits',
          'Apartment complex residents seeking doorstep car cleaning',
          'Small fleet / multi-car owners needing recurring maintenance'
        ],
        userNeeds: [
          'Clear upfront pricing based on vehicle category (Sedan, SUV, Hatchback)',
          'Instant calendar slot availability without waiting for chat replies',
          'Transparent tracking from request confirmation to job completion'
        ],
        corePersona: {
          name: 'Rahim K.',
          role: 'IT Professional & Multi-Car Owner',
          quote: 'I do not want to negotiate slot times over WhatsApp on my Saturday morning. Just let me pick my car, choose 10:00 AM, and see the exact cost.'
        }
      },
      userFlow: {
        steps: [
          {
            stepNumber: '01',
            title: 'Vehicle & Service Selection',
            description: 'Customer chooses car body type (Hatchback/Sedan/SUV) and package (Exterior Wash, Deep Interior, or Ceramic Detail).'
          },
          {
            stepNumber: '02',
            title: 'Location & Slot Booking',
            description: 'Saved address selection with smart time-slot grid displaying real-time availability.'
          },
          {
            stepNumber: '03',
            title: 'Transparent Pricing Review',
            description: 'Itemized breakdown showing base charge, tax, and estimated duration with zero hidden fees.'
          },
          {
            stepNumber: '04',
            title: 'Instant Confirmation & Tracking',
            description: 'Booking code generated with live status badge (Scheduled → En Route → In Progress → Completed).'
          }
        ],
        comparison: {
          traditional: [
            '1. Call/WhatsApp provider',
            '2. Wait 20-60 mins for response',
            '3. Negotiate available time slot',
            '4. Send location pin & car model details',
            '5. Uncertainty until technician arrives'
          ],
          streamlined: [
            '1. Select vehicle & service tier',
            '2. Pick verified available slot',
            '3. Instant confirmation in < 90 seconds',
            '4. Automated status updates & job history'
          ]
        }
      },
      wireframes: {
        rationale: 'Prioritized a single vertical thumb zone for mobile users. Instead of multi-page navigation, progressive disclosure was used to keep the user focused on one decision at a time.',
        keyDecisions: [
          'High-contrast vehicle silhouettes to immediately identify car size class without reading specs.',
          'Time slots represented as selectable pills indicating remaining capacity rather than open text fields.',
          'Sticky bottom action bar showing dynamic total price updating in real-time as add-ons are toggled.',
          'Separated customer experience from internal employee dispatch board to preserve architectural clarity.'
        ]
      },
      visualDesign: {
        designSystem: 'Dark graphite base (#080808) paired with high-contrast neutral cards (#131316) and sharp electric lime (#C8FF00) action indicators for unambiguous touch targets.',
        palette: [
          { name: 'Canvas Dark', hex: '#080808' },
          { name: 'Card Surface', hex: '#141418' },
          { name: 'Electric Lime Action', hex: '#C8FF00' },
          { name: 'Text Primary', hex: '#F5F5F5' },
          { name: 'Text Secondary', hex: '#9E9EA7' }
        ],
        typography: 'Inter / Plus Jakarta Sans with tabular figures for currency and numerical slot representations.',
        keyHighlights: [
          'Clean border hierarchy (1px subtle white overlay) rather than muddy drop-shadows.',
          'Micro-badges for service features (e.g. Eco-Steam, 45 Min Duration, Waterless Option).',
          'Distinctive vehicle selector chips with smooth active states.'
        ]
      },
      development: {
        stack: ['Next.js App Router', 'React 19', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
        architectureDescription: 'Built with a clean separation of concerns: Next.js frontend consuming RESTful Express endpoints, backed by MongoDB schemas for Users, Vehicles, Bookings, and ServiceSlots.',
        architectureNodes: [
          { layer: 'Client Layer', tech: 'Next.js + Tailwind CSS', role: 'Responsive mobile-first booking UI & authenticated customer portal' },
          { layer: 'API Service', tech: 'Node.js + Express', role: 'JWT verification, booking conflict resolution, and price calculation engine' },
          { layer: 'Database', tech: 'MongoDB / Mongoose', role: 'Stores indexed collections for real-time slot locks and historical receipts' }
        ],
        featuresImplemented: [
          'Customer authenticated vehicle garage with saved car profiles',
          'Dynamic pricing matrix based on car classification (Hatchback / Sedan / SUV)',
          'Real-time slot collision prevention during concurrent bookings',
          'Admin & technician status dashboard for job progression updates',
          'JWT authentication with secure token storage and role-based access'
        ]
      },
      challenges: {
        challenge: 'Preventing double-booking when multiple users selected the same 10:00 AM technician window simultaneously.',
        solution: 'Implemented atomic database slot reservation with a 5-minute hold lock during checkout, automatically releasing if the user abandons the flow.'
      },
      finalProduct: {
        description: 'A responsive, high-performing web application running seamlessly on mobile browsers, turning what was once a 30-minute WhatsApp exchange into a polished 90-second tap experience.',
        screens: [
          {
            title: 'Active Booking Flow',
            description: 'Frictionless step-by-step vehicle selection and dynamic pricing preview.',
            previewType: 'carwash-booking'
          },
          {
            title: 'Live Service Tracker',
            description: 'Real-time operational status updates for car owners awaiting technician arrival.',
            previewType: 'carwash-status'
          }
        ]
      },
      whatILearned: [
        'How to design for touch targets in mobile contexts where users might be on the go or outside near their car.',
        'The critical importance of optimistic UI updates to make booking actions feel instantaneous.',
        'Structuring scalable MongoDB schemas that account for dynamic pricing overrides and coupon codes.'
      ]
    }
  },
  {
    id: 'studysync',
    number: '02',
    title: 'STUDYSYNC',
    subtitle: 'AI-Powered Learning Platform',
    tagline: 'An integrated study environment uniting structured session planning, active recall cards, and Socratic AI tutoring.',
    categories: ['UX', 'PRODUCT DESIGN', 'AI', 'FRONTEND'],
    summary: 'A unified learning workspace engineered to combat cognitive fragmentation. Combines distraction-free note capture, active recall deck generation, and an AI tutor grounded in Socratic questioning.',
    role: 'Product Designer & Frontend Engineer',
    timeline: 'Product Architecture & Implementation',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'AI Integration', 'Markdown Parser'],
    heroAccent: '#C8FF00',
    caseStudy: {
      problem: {
        statement: 'Students juggle three to four disconnected apps while studying: one for lecture notes, another for flashcards, another for generic AI chatbots, and a timer for focus. This constant context-switching destroys deep focus.',
        frictionPoints: [
          'Copy-pasting lecture notes into external chat windows breaks cognitive momentum.',
          'Generic AI chatbots tend to give raw answers instead of fostering active learning.',
          'No automated bridge between understanding a concept and converting it into spaced-repetition flashcards.',
          'Cluttered, distracting UI layouts filled with irrelevant social feeds and noise.'
        ],
        insight: 'Students retain knowledge best when the AI acts as a patient Socratic tutor within their own notes workspace, guiding them to self-correct rather than providing homework shortcuts.'
      },
      user: {
        targetAudience: [
          'Undergraduate students tackling dense technical curricula (Engineering, Medicine, Law)',
          'Self-taught developers learning complex frameworks and systems design',
          'Knowledge workers preparing for professional technical certifications'
        ],
        userNeeds: [
          'Distraction-free workspace with contextual AI assistance beside their notes',
          'Socratic prompts that test understanding through active questioning',
          'Instant 1-click generation of active recall review cards from highlighted text'
        ],
        corePersona: {
          name: 'Aisha M.',
          role: 'Computer Science Undergrad',
          quote: 'When I get stuck on recursion or tree traversals, I do not want the code handed to me. I want a hint that guides my intuition without having to leave my notes.'
        }
      },
      userFlow: {
        steps: [
          {
            stepNumber: '01',
            title: 'Workspace Initialization',
            description: 'Student creates a subject workspace (e.g., Data Structures) with clean markdown editing and embedded timer.'
          },
          {
            stepNumber: '02',
            title: 'Contextual AI Query',
            description: 'Selecting complex syntax or concepts opens the Socratic Tutor drawer without leaving the active document.'
          },
          {
            stepNumber: '03',
            title: 'Guided Understanding',
            description: 'The AI guides through hints, conceptual analogies, and targeted counter-questions rather than raw answers.'
          },
          {
            stepNumber: '04',
            title: 'Active Recall Card Extraction',
            description: 'One-click conversion of breakthrough insights into spaced-repetition review cards.'
          }
        ],
        comparison: {
          traditional: [
            '1. Open Notion/Docs for notes',
            '2. Open ChatGPT tab, paste code/problem',
            '3. Receive giant wall of text with final answer',
            '4. Manually open Anki to create flashcards',
            '5. High cognitive friction & constant distraction'
          ],
          streamlined: [
            '1. Unified workspace with side-by-side notes and tutor',
            '2. Socratic dialogue tailored to notes context',
            '3. Instant 1-click active recall card generation',
            '4. Built-in Pomodoro rhythm & zero context switches'
          ]
        }
      },
      wireframes: {
        rationale: 'Designed a dual-pane layout: 65% canvas width dedicated to the primary document to maintain deep writing flow, and a collapsible 35% interactive assistant drawer with clear visual demarcation.',
        keyDecisions: [
          'Floating contextual toolbar appearing only on text selection to prevent UI clutter.',
          'Distinct color coding between user assertions and AI Socratic questions to keep role boundaries clear.',
          'Integrated active recall drawer displaying spaced repetition status at a glance.'
        ]
      },
      visualDesign: {
        designSystem: 'Monastic, distraction-free dark theme. Minimal visual ornamentation. Typography pairing JetBrains Mono for syntax with Plus Jakarta Sans for clean reading comfort.',
        palette: [
          { name: 'Study Canvas', hex: '#0A0A0C' },
          { name: 'Drawer Surface', hex: '#121215' },
          { name: 'Tutor Lime Glow', hex: '#C8FF00' },
          { name: 'Syntax Muted', hex: '#6366F1' },
          { name: 'Text High Contrast', hex: '#F5F5F5' }
        ],
        typography: 'Plus Jakarta Sans for primary UI, JetBrains Mono for code blocks and analytical notes.',
        keyHighlights: [
          'Custom markdown renderer with real-time code highlighting.',
          'Subtle glowing status pill indicating AI response stream.',
          'Tactile flashcard flip animation using CSS 3D transforms.'
        ]
      },
      development: {
        stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'AI Integration'],
        architectureDescription: 'Constructed around a reactive document editor connected to an Express backend. AI queries pass through a tailored system prompt enforcing Socratic pedagogy before streaming tokens to the client.',
        architectureNodes: [
          { layer: 'Frontend Workspace', tech: 'Next.js + Tailwind CSS', role: 'Dual-pane markdown editor with streaming token rendering' },
          { layer: 'Pedagogy Engine', tech: 'Node.js / Express', role: 'Context assembly, prompt guarding, and token stream proxy' },
          { layer: 'Persistence Layer', tech: 'MongoDB', role: 'Stores nested workspaces, revision histories, and flashcard review intervals' }
        ],
        featuresImplemented: [
          'Real-time markdown parsing with clean mathematical and code formatting',
          'Socratic AI tutoring mode enforcing step-by-step guidance over direct solutions',
          'Active recall deck generator that parses key takeaways into question/answer pairs',
          'Session timer with ambient focus mode dimming secondary controls'
        ]
      },
      challenges: {
        challenge: 'Handling streaming AI responses smoothly in the UI without causing layout jumping or scroll flickering during markdown rendering.',
        solution: 'Implemented an auto-scrolling buffer with memoized AST markdown tokenization, ensuring text flows naturally like a human tutor typing.'
      },
      finalProduct: {
        description: 'An inspiring, calm study environment that empowers students to master complex technical domains through active recall and guided Socratic reasoning.',
        screens: [
          {
            title: 'Unified Study Workspace',
            description: 'Markdown document canvas alongside the contextual Socratic AI assistant.',
            previewType: 'studysync-workspace'
          },
          {
            title: 'Socratic Tutor Dialogue',
            description: 'Interactive questioning flow guiding understanding step by step.',
            previewType: 'studysync-tutor'
          }
        ]
      },
      whatILearned: [
        'How to design conversational AI interfaces that provide meaningful cognitive value rather than noisy gimmickry.',
        'Optimizing React re-renders when dealing with high-frequency streaming text chunks.',
        'Balancing user agency with intelligent automation in learning applications.'
      ]
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    question: 'Who is using it, and why does this problem exist?',
    explanation: 'I dive into user mental models, current manual workarounds, and core business goals before drawing a single rectangle.',
    action: 'Map user journeys, uncover latent frustrations, and define clear success criteria.'
  },
  {
    number: '02',
    title: 'SIMPLIFY',
    question: 'What can be removed without losing clarity?',
    explanation: 'Complexity is easy; clarity takes discipline. I strip out decorative noise, unnecessary steps, and cognitive friction.',
    action: 'Distill multi-step flows into progressive disclosure and frictionless paths.'
  },
  {
    number: '03',
    title: 'DESIGN',
    question: 'What should the experience feel like?',
    explanation: 'I craft high-contrast visual systems with mathematical spacing, intentional typography hierarchy, and tactile micro-interactions.',
    action: 'Build reusable Figma component systems, interactive prototypes, and token definitions.'
  },
  {
    number: '04',
    title: 'BUILD',
    question: 'How do we make it real, fast, and accessible?',
    explanation: 'I bring designs into production with clean TypeScript, semantic markup, reactive state management, and 60fps performance.',
    action: 'Write maintainable React/Next.js code, robust APIs, and responsive layouts.'
  },
  {
    number: '05',
    title: 'ITERATE',
    question: 'What can be improved based on real interaction?',
    explanation: 'A product is never done at launch. I test edge cases, refine micro-interactions, optimize loading states, and polish details.',
    action: 'Review qualitative feedback, audit performance, and elevate interaction fidelity.'
  }
];

export const TOOLBOX: ToolCategory[] = [
  {
    category: 'DESIGN',
    items: [
      { name: 'Figma', description: 'Components, Auto Layout, Variables & Interactive Prototypes', level: 'Advanced' },
      { name: 'Wireframing', description: 'Low-fidelity information architecture & rapid exploration', level: 'Skilled' },
      { name: 'Design Systems', description: 'Tokens, mathematical scales, atomic components & specs', level: 'Advanced' },
      { name: 'Interaction Design', description: 'State transitions, micro-interactions & tactile feedback', level: 'Skilled' }
    ]
  },
  {
    category: 'FRONTEND',
    items: [
      { name: 'React 19 & Next.js', description: 'App router, Server/Client components, Hooks & clean state', level: 'Advanced' },
      { name: 'TypeScript', description: 'Strict typing, interfaces, generics & defensive architecture', level: 'Skilled' },
      { name: 'Tailwind CSS', description: 'Design tokens, arbitrary values, responsive utilities & v4', level: 'Advanced' },
      { name: 'Motion & Animation', description: 'Framer Motion, CSS springs, gesture controls & transitions', level: 'Skilled' }
    ]
  },
  {
    category: 'BACKEND',
    items: [
      { name: 'Node.js & Express', description: 'REST APIs, middleware, routing & error handling', level: 'Proficient' },
      { name: 'MongoDB & Mongoose', description: 'Document modeling, indexing, aggregation & validation', level: 'Proficient' },
      { name: 'Authentication & JWT', description: 'Secure cookie sessions, token refresh & RBAC access', level: 'Proficient' }
    ]
  },
  {
    category: 'TOOLS & PRACTICES',
    items: [
      { name: 'Git & GitHub', description: 'Branching, PRs, semantic commit history & collaboration', level: 'Advanced' },
      { name: 'VS Code', description: 'Optimized workflow, linting, debugging & snippet engines', level: 'Advanced' },
      { name: 'Accessibility & SEO', description: 'WCAG 2.1 AA contrast, semantic HTML5, keyboard navigation', level: 'Disciplined' }
    ]
  }
];

export const CURRENTLY_BUILDING: BuildingItem[] = [
  {
    name: 'AL FARAH v2',
    tagline: 'Service Dispatch & Worker Mobile View',
    status: 'In Active Refinement',
    currentMilestone: 'Designing the real-time technician route tracker and offline-tolerant job completion checklist.',
    tags: ['UX Workflow', 'Mobile Gestures', 'Next.js']
  },
  {
    name: 'STUDYSYNC Flashcard Engine',
    tagline: 'Spaced Repetition & Markdown Sync',
    status: 'Prototyping Interaction',
    currentMilestone: 'Refining the 3D tactile card flip interaction and SuperMemo SM-2 interval algorithm in TypeScript.',
    tags: ['Algorithm', 'Motion Design', 'Frontend']
  },
  {
    name: 'INTERACTIVE UI EXPERIMENTS',
    tagline: 'Micro-interactions & Creative Code',
    status: 'Ongoing Exploration',
    currentMilestone: 'Exploring kinetic typography tracking, physics-based springs, and bespoke dark mode token switches.',
    tags: ['Creative Dev', 'TypeScript', 'Motion']
  }
];

export const EXPERIMENTS_LIST: Experiment[] = [
  {
    id: 'magnetic-button',
    title: 'Magnetic Spring Physics',
    description: 'A tactile cursor attraction button with subtle resistance and fluid return spring.',
    tag: 'INTERACTION',
    tech: 'Framer Motion + Pointer Math'
  },
  {
    id: 'kinetic-type',
    title: 'Fluid Typography Tracking',
    description: 'Dynamic character tracking scaling responsively based on cursor proximity.',
    tag: 'TYPOGRAPHY',
    tech: 'CSS Variables + React Hooks'
  },
  {
    id: 'token-spectrum',
    title: 'Design Token Palette Lens',
    description: 'Interactive color token analyzer inspecting WCAG contrast ratio against dark backgrounds.',
    tag: 'DESIGN SYSTEM',
    tech: 'Color Math + Realtime Canvas'
  }
];

export const DUAL_MAPPING = [
  {
    design: 'Design Tokens & Mathematical Scales',
    engineering: 'Tailwind Config & CSS Custom Variables',
    bridge: 'Eliminating guesswork by codifying font sizes, spacing, and colors into immutable tokens shared between Figma and code.'
  },
  {
    design: 'User Mental Models & Information Hierarchy',
    engineering: 'Component Decomposition & Modular State',
    bridge: 'Translating how a user conceptualizes a task into clean React component trees with predictable props.'
  },
  {
    design: 'Tactile Transitions & Micro-Interactions',
    engineering: 'Motion Spring Curves & 60fps GPU Hardware Transforms',
    bridge: 'Implementing physics-based spring dampening (mass: 1, damping: 20) rather than sluggish linear transitions.'
  },
  {
    design: 'Responsive Ergonomics (Thumb Zones & Safe Areas)',
    engineering: 'Mobile-first CSS Grid, Flexbox & Dynamic Viewport Units',
    bridge: 'Ensuring critical interactive targets remain > 44px and comfortably within single-hand thumb reach.'
  },
  {
    design: 'Inclusive Accessibility (Contrast & State Feedback)',
    engineering: 'Semantic HTML5, ARIA Attributes & Keyboard Focus Loops',
    bridge: 'Delivering WCAG AA compliance so experiences are effortless for mouse, keyboard, and screen reader users alike.'
  }
];

// Grounded Knowledge Base for "Ask Shaik" AI Assistant
export const ASSISTANT_KNOWLEDGE = {
  about: "Shaik Abdulla is a Computer Science & Engineering graduate positioning himself as an early-career UX / Product Designer and Frontend Developer. His core philosophy is 'DESIGNER'S EYE. ENGINEER'S MIND.' — he bridges the gap between thoughtful interface design in Figma and clean frontend engineering in React, Next.js, and TypeScript.",
  honestTone: "Shaik is an early-career fresher, hungry, ambitious, technically rigorous, and deeply attentive to detail. He does not claim senior status or fake metrics, but brings solid full-stack execution and product design rigor.",
  projects: [
    {
      name: "Al Farah",
      type: "Mobile Car Wash Booking Platform",
      summary: "A full-stack web platform built with Next.js, React, Tailwind CSS, Node.js, Express, and MongoDB. It replaces manual, error-prone WhatsApp and phone booking with a streamlined 4-step booking flow, transparent vehicle-tiered pricing, and operational tracking.",
      tech: "Next.js, React, Tailwind CSS, Node.js, Express, MongoDB, JWT."
    },
    {
      name: "StudySync",
      type: "AI-Powered Learning Platform",
      summary: "A focused learning workspace combining distraction-free markdown notes, an embedded Pomodoro rhythm, Socratic AI tutoring (guiding rather than spoon-feeding answers), and 1-click active recall flashcard generation.",
      tech: "Next.js, React, Tailwind CSS, Node.js, MongoDB, AI integration."
    }
  ],
  stack: {
    design: "Figma (Tokens, Auto Layout, Prototyping), Wireframing, Interaction Design, Design Systems.",
    frontend: "React 19, Next.js, TypeScript, Tailwind CSS (v4), Motion / Framer Motion, HTML5/CSS3.",
    backend: "Node.js, Express.js, MongoDB / Mongoose, JWT Authentication, REST APIs.",
    tools: "Git, GitHub, VS Code, Vercel."
  },
  contact: {
    email: "abdullashaik0208@gmail.com",
    availability: "Immediately available for full-time junior UX/Product Design or Frontend Developer opportunities, design engineering roles, or internships.",
    location: "India (open to remote worldwide or on-site relocation)."
  }
};
