const projects = [
  {
    slug: 'aiml-industry-radar',
    num: '01',
    kicker: '01 · Full-stack AI application',
    title: 'AIML Industry Radar',
    titleHtml: <>AIML<br /><em>Industry Radar</em></>,
    summary:
      'Job-market intelligence platform using real job postings, LLM extraction and personalized skill analysis.',
    intro:
      'A job-market intelligence platform that turns real job postings into structured AI/ML career insights.',
    problemTitle:
      'Job descriptions contain the signal. Finding it manually is the bottleneck.',
    problemBody:
      'I built a pipeline that collects job data, extracts skills with LLMs, normalizes them, classifies roles and presents the results through an interactive dashboard.',
    bullets: [
      <>Processed <strong>787 real job postings</strong>.</>,
      <>Identified <strong>532 normalized skills</strong> across the dataset.</>,
      'Automated skill extraction, normalization, role classification and aggregation.',
      'Added role analysis, skill-gap recommendations, learning roadmaps and AI-assisted career queries.',
      'Built FastAPI endpoints and a React dashboard around the pipeline.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Gemini', 'Groq', 'LLM APIs'],
    note: (
      <>
        This project also won <strong>III Prize</strong> at a 24-hour software hackathon.
      </>
    ),
    listTags: ['FastAPI', 'React', 'LLMs'],
    github: 'https://github.com/nithuvarshini',
  },
  {
    slug: 'college-knowledge-assistant',
    num: '02',
    kicker: '02 · RAG application',
    title: 'College Student Knowledge Assistant',
    titleHtml: <>College Student<br /><em>Knowledge Assistant</em></>,
    summary: 'Citation-grounded RAG system for querying official college documents.',
    intro:
      'A document-grounded question-answering system designed to answer student queries from official college documents with citations.',
    problemTitle: "Students shouldn't have to hunt through documents for one answer.",
    problemBody:
      'The system ingests college documents, breaks them into useful chunks, retrieves relevant context and uses that context to answer questions.',
    bullets: [
      'Document ingestion, text extraction and overlapping chunking.',
      'Semantic retrieval with vector storage using ChromaDB.',
      'Keyword and semantic retrieval combined into a hybrid search approach.',
      'FastAPI endpoints for queries, uploads, indexing, statistics and document-type filtering.',
      'Citation-backed responses to keep answers grounded in the source material.',
    ],
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Hugging Face', 'RAG'],
    note: null,
    listTags: ['RAG', 'ChromaDB', 'FastAPI'],
    github: 'https://github.com/nithuvarshini',
  },
  {
    slug: 'trailmark',
    num: '03',
    kicker: '03 · Full-stack web application',
    title: 'TrailMark',
    titleHtml: <>TrailMark<br /><em>Professional Journey</em></>,
    summary:
      'Full-stack professional journey platform for projects, certifications, internships and milestones.',
    intro:
      'A centralized workspace for managing projects, certifications, internships and other professional milestones.',
    problemTitle: 'Professional progress gets scattered across files, links and platforms.',
    problemBody:
      'TrailMark brings milestones into one place and turns them into a structured, shareable professional profile.',
    bullets: [
      'REST APIs with JWT authentication and CRUD workflows.',
      'Validation, search, filtering and deadline tracking across 12 milestone categories.',
      'Analytics dashboards and document management.',
      'QR-based public profile sharing.',
      'React single-page application connected to a Node/Express backend.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'JWT', 'REST API'],
    note: null,
    listTags: ['React', 'Node.js', 'REST'],
    github: 'https://github.com/nithuvarshini',
  },
]

export default projects
