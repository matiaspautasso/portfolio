export type Lang = "en" | "es";

export type Project = {
  id: string;
  kind: { en: string; es: string };
  name: string;
  tagline: { en: string; es: string };
  description: { en: string; es: string };
  tech: string[];
  url?: string; // omitted when the repository is private
  featured?: boolean;
};

export const CONTACT = {
  email: "matiaspautasso2@gmail.com",
  github: "https://github.com/matiaspautasso",
  githubLabel: "github.com/matiaspautasso",
  linkedin: "https://www.linkedin.com/in/matiaspautasso",
  linkedinLabel: "linkedin.com/in/matiaspautasso",
  location: { en: "Córdoba, Argentina", es: "Córdoba, Argentina" },
  resume: "resume-matias-pautasso.pdf",
};

export const PROJECTS: Project[] = [
  {
    id: "erp-los-hermanos",
    kind: { en: "Client project", es: "Proyecto de cliente" },
    name: "Business ERP — Los Hermanos",
    tagline: {
      en: "Inventory, sales and cash & treasury management.",
      es: "Gestión de inventario, ventas y caja/tesorería.",
    },
    description: {
      en: "Production ERP for a real retail business: inventory, point-of-sale, cash and treasury control, weight-based selling and Excel import/export. Built as a NestJS + PostgreSQL monorepo with a responsive web client and a Windows desktop build, covered by unit, integration and end-to-end tests. Shipped against real business processes and day-to-day operation.",
      es: "ERP en producción para un comercio real: inventario, punto de venta, control de caja y tesorería, venta por peso e import/export de Excel. Monorepo NestJS + PostgreSQL con cliente web responsive y build de escritorio para Windows, cubierto por tests unitarios, de integración y end-to-end. Construido sobre procesos de negocio reales y operación diaria.",
    },
    tech: ["TypeScript", "NestJS", "PostgreSQL", "Prisma", "React", "Playwright", "Docker"],
    featured: true,
  },
  {
    id: "jobflow",
    kind: { en: "Personal project", es: "Proyecto personal" },
    name: "JobFlow — Distributed Job Processing",
    tagline: {
      en: "Async CSV import with queues, workers and live monitoring.",
      es: "Importación CSV asíncrona con colas, workers y monitoreo en vivo.",
    },
    description: {
      en: "A backend-focused platform that imports and processes large data volumes asynchronously. BullMQ/Redis queues feed an independent NestJS worker; a transactional outbox guarantees reliable publishing, imports are idempotent and resumable with checkpoints, and progress streams to the UI over WebSockets.",
      es: "Plataforma orientada a backend que importa y procesa grandes volúmenes de datos de forma asíncrona. Colas BullMQ/Redis alimentan un worker NestJS independiente; un transactional outbox garantiza publicación confiable, las importaciones son idempotentes y reanudables con checkpoints, y el progreso se transmite a la UI por WebSockets.",
    },
    tech: ["NestJS", "BullMQ", "Redis", "PostgreSQL", "WebSockets", "Turborepo"],
    url: "https://github.com/matiaspautasso/REALTIME-ASYNC-PLATF-RESUMEE",
  },
  {
    id: "distributed-orders",
    kind: { en: "Personal project", es: "Proyecto personal" },
    name: "Distributed Orders System",
    tagline: {
      en: "gRPC microservices with saga, outbox and idempotency.",
      es: "Microservicios gRPC con saga, outbox e idempotencia.",
    },
    description: {
      en: "An order-processing backend built as independent microservices that stay consistent when parts fail: synchronous gRPC with Protocol Buffers, a database per service, an orchestrated saga with reconciliation, a transactional outbox, idempotent requests and atomic stock reservation with row locks — no overselling under concurrency.",
      es: "Backend de procesamiento de pedidos construido como microservicios independientes que se mantienen consistentes ante fallos: gRPC síncrono con Protocol Buffers, una base por servicio, saga orquestada con reconciliación, transactional outbox, requests idempotentes y reserva de stock atómica con row locks — sin sobreventa bajo concurrencia.",
    },
    tech: ["NestJS", "gRPC", "Protobuf", "PostgreSQL", "BullMQ", "Docker"],
    url: "https://github.com/matiaspautasso/DISTR-ORDERS-SYSTEM",
  },
  {
    id: "ai-business",
    kind: { en: "Personal project", es: "Proyecto personal" },
    name: "AI Business Assistant",
    tagline: {
      en: "RAG, tool-calling agent and an MCP server.",
      es: "RAG, agente con tool calling y servidor MCP.",
    },
    description: {
      en: "An enterprise-style assistant that answers over internal docs and business data. It implements a RAG pipeline with pgvector semantic search, a multi-step agent that calls read-only business tools, and a Model Context Protocol server that reuses the same domain logic — all on a hexagonal, fully tested TypeScript monorepo.",
      es: "Asistente de estilo empresarial que responde sobre documentación interna y datos de negocio. Implementa un pipeline RAG con búsqueda semántica pgvector, un agente multi-paso que invoca herramientas de negocio de solo lectura y un servidor Model Context Protocol que reutiliza la misma lógica de dominio — todo sobre un monorepo TypeScript hexagonal y testeado.",
    },
    tech: ["NestJS", "React", "pgvector", "Vercel AI SDK", "MCP", "Prisma"],
    url: "https://github.com/matiaspautasso/AI-BUSSINESS",
  },
  {
    id: "ai-sales",
    kind: { en: "Personal project", es: "Proyecto personal" },
    name: "AI Sales Assistant",
    tagline: {
      en: "B2B streaming chat with semantic product search.",
      es: "Chat B2B en streaming con búsqueda semántica de productos.",
    },
    description: {
      en: "A B2B sales assistant that handles product discovery, pricing and lead capture through a single streaming chat. Multi-step tool calling, semantic product recommendations with pgvector, and zero-CRM lead export to Google Sheets, built on Next.js and the Vercel AI SDK.",
      es: "Asistente de ventas B2B que resuelve descubrimiento de productos, precios y captura de leads en un único chat en streaming. Tool calling multi-paso, recomendación semántica de productos con pgvector y exportación de leads a Google Sheets sin CRM, sobre Next.js y el Vercel AI SDK.",
    },
    tech: ["Next.js", "Vercel AI SDK", "OpenAI", "pgvector", "Prisma", "shadcn/ui"],
    url: "https://github.com/matiaspautasso/PRAISALESASSISTANT",
  },
];

export const TECH_STACK = [
  "TypeScript",
  "React",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "gRPC",
  "Docker",
  "GitHub Actions",
];

type Dict = {
  nav: { projects: string; about: string; contact: string };
  resume: string;
  langToggle: string;
  hero: {
    greeting: string;
    role: string;
    summary: string;
    stack: string;
    ctaProjects: string;
    ctaResume: string;
  };
  sections: {
    projectsLabel: string;
    projectsTitle: string;
    whatLabel: string;
    whatTitle: string;
    aboutLabel: string;
    aboutTitle: string;
    stackLabel: string;
    stackTitle: string;
    contactLabel: string;
    contactTitle: string;
  };
  what: { items: { title: string; body: string }[] };
  about: string[];
  contact: { lead: string; emailLabel: string; githubLabel: string; linkedinLabel: string };
  viewProject: string;
  privateProject: string;
  footerNote: string;
};

export const UI: Record<Lang, Dict> = {
  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    resume: "Resume",
    langToggle: "ES",
    hero: {
      greeting: "Hi, I'm Matías.",
      role: "Full Stack Developer.",
      summary:
        "I build web applications and business software — turning real-world processes into reliable, well-tested digital systems. My core strength is backend engineering: distributed systems, APIs and databases.",
      stack: "TypeScript · React · NestJS · PostgreSQL",
      ctaProjects: "Explore projects",
      ctaResume: "Resume",
    },
    sections: {
      projectsLabel: "01",
      projectsTitle: "Featured projects",
      whatLabel: "02",
      whatTitle: "What I do",
      aboutLabel: "03",
      aboutTitle: "About me",
      stackLabel: "04",
      stackTitle: "Tech stack",
      contactLabel: "05",
      contactTitle: "Get in touch",
    },
    what: {
      items: [
        {
          title: "Backend & APIs",
          body: "REST and gRPC services in NestJS, with queues, workers and the consistency patterns that keep data correct when parts fail.",
        },
        {
          title: "Databases & data design",
          body: "PostgreSQL schema and query design, Prisma, stored procedures and vector search — modelled around the real domain.",
        },
        {
          title: "Software architecture",
          body: "Hexagonal and screaming architecture, monorepos, domain modelling and testable, AI-navigable code.",
        },
        {
          title: "Business process & product knowledge",
          body: "I learn how a business actually operates — inventory, sales, cash, treasury — and turn those processes into software people use every day.",
        },
      ],
    },
    about: [
      "I'm a Systems Analysis student from Córdoba, Argentina, focused on building practical software for real businesses.",
      "I care about fundamentals before frameworks: architecture, design patterns and data modelling. My work spans a production ERP used by a real company and a set of backend projects exploring distributed systems, messaging and applied AI.",
      "I'm most interested in backend engineering, system design and scalable applications — and in understanding the business behind the software.",
    ],
    contact: {
      lead: "Let's build something useful.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    viewProject: "View project",
    privateProject: "Private · client project",
    footerNote: "Built with React, TypeScript and Vite. Deployed on GitHub Pages.",
  },
  es: {
    nav: { projects: "Proyectos", about: "Perfil", contact: "Contacto" },
    resume: "CV",
    langToggle: "EN",
    hero: {
      greeting: "Hola, soy Matías.",
      role: "Desarrollador Full Stack.",
      summary:
        "Construyo aplicaciones web y software de negocio — convirtiendo procesos del mundo real en sistemas digitales confiables y bien testeados. Mi fuerte es el backend: sistemas distribuidos, APIs y bases de datos.",
      stack: "TypeScript · React · NestJS · PostgreSQL",
      ctaProjects: "Ver proyectos",
      ctaResume: "CV",
    },
    sections: {
      projectsLabel: "01",
      projectsTitle: "Proyectos destacados",
      whatLabel: "02",
      whatTitle: "Qué hago",
      aboutLabel: "03",
      aboutTitle: "Sobre mí",
      stackLabel: "04",
      stackTitle: "Stack técnico",
      contactLabel: "05",
      contactTitle: "Contacto",
    },
    what: {
      items: [
        {
          title: "Backend y APIs",
          body: "Servicios REST y gRPC en NestJS, con colas, workers y los patrones de consistencia que mantienen los datos correctos cuando algo falla.",
        },
        {
          title: "Bases de datos y diseño de datos",
          body: "Diseño de esquemas y queries en PostgreSQL, Prisma, stored procedures y búsqueda vectorial — modelados sobre el dominio real.",
        },
        {
          title: "Arquitectura de software",
          body: "Arquitectura hexagonal y screaming, monorepos, modelado de dominio y código testeable y navegable.",
        },
        {
          title: "Conocimiento de negocio y producto",
          body: "Aprendo cómo opera realmente un negocio — inventario, ventas, caja, tesorería — y convierto esos procesos en software que la gente usa todos los días.",
        },
      ],
    },
    about: [
      "Soy estudiante de Analista de Sistemas en Córdoba, Argentina, enfocado en construir software práctico para negocios reales.",
      "Me importan los fundamentos antes que los frameworks: arquitectura, patrones de diseño y modelado de datos. Mi trabajo abarca un ERP en producción usado por una empresa real y un conjunto de proyectos backend que exploran sistemas distribuidos, mensajería e IA aplicada.",
      "Me interesan sobre todo la ingeniería backend, el diseño de sistemas y las aplicaciones escalables — y entender el negocio detrás del software.",
    ],
    contact: {
      lead: "Construyamos algo útil.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    viewProject: "Ver proyecto",
    privateProject: "Privado · proyecto de cliente",
    footerNote: "Hecho con React, TypeScript y Vite. Desplegado en GitHub Pages.",
  },
};
