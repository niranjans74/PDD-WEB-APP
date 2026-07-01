require("dotenv").config();
const mongoose = require("mongoose");
const CompanyTopic = require("./models/CompanyTopic");
const EvergreenJob = require("./models/EvergreenJob");

const companiesData = [
  {
    name: 'Apple',
    domain: 'apple.com',
    topics: {
      Easy: [
        { id: 'app-e1', name: 'Arrays & Strings' },
        { id: 'app-e2', name: 'Two Pointers' },
        { id: 'app-e3', name: 'Linked Lists' },
        { id: 'app-e4', name: 'Math & Geometry' }
      ],
      Medium: [
        { id: 'app-m1', name: 'Trees & Graphs' },
        { id: 'app-m2', name: 'Sliding Window' },
        { id: 'app-m3', name: 'Intervals' },
        { id: 'app-m4', name: 'Matrix' }
      ],
      Hard: [
        { id: 'app-h1', name: 'Advanced DP' },
        { id: 'app-h2', name: 'Hard Graphs' },
        { id: 'app-h3', name: 'Tries' }
      ]
    }
  },
  {
    name: 'Google',
    domain: 'google.com',
    topics: {
      Easy: [
        { id: 'goo-e1', name: 'Hash Maps' },
        { id: 'goo-e2', name: 'Binary Search' },
        { id: 'goo-e3', name: 'Bit Manipulation' }
      ],
      Medium: [
        { id: 'goo-m1', name: 'Dynamic Programming' },
        { id: 'goo-m2', name: 'Graph Traversal (BFS/DFS)' },
        { id: 'goo-m3', name: 'Tries & Strings' },
        { id: 'goo-m4', name: 'Heaps & Priority Queues' }
      ],
      Hard: [
        { id: 'goo-h1', name: 'Segment Trees' },
        { id: 'goo-h2', name: 'Binary Lifting' },
        { id: 'goo-h3', name: 'Advanced Math' }
      ]
    }
  },
  {
    name: 'Microsoft',
    domain: 'microsoft.com',
    topics: {
      Easy: [
        { id: 'ms-e1', name: 'Linked Lists' },
        { id: 'ms-e2', name: 'Trees (Basic)' },
        { id: 'ms-e3', name: 'Strings' }
      ],
      Medium: [
        { id: 'ms-m1', name: 'System Design Basics' },
        { id: 'ms-m2', name: 'Binary Search Trees' },
        { id: 'ms-m3', name: 'Backtracking' },
        { id: 'ms-m4', name: 'Greedy Algorithms' }
      ],
      Hard: [
        { id: 'ms-h1', name: 'Advanced System Design' },
        { id: 'ms-h2', name: 'Tries' },
        { id: 'ms-h3', name: 'Hard DP' }
      ]
    }
  },
  {
    name: 'IBM',
    domain: 'ibm.com',
    topics: {
      Easy: [
        { id: 'ibm-e1', name: 'Loops & Conditions' },
        { id: 'ibm-e2', name: 'Basic SQL' },
        { id: 'ibm-e3', name: 'Arrays' }
      ],
      Medium: [
        { id: 'ibm-m1', name: 'Queues & Stacks' },
        { id: 'ibm-m2', name: 'Object Oriented Programming' },
        { id: 'ibm-m3', name: 'Database Normalization' }
      ],
      Hard: [
        { id: 'ibm-h1', name: 'Cloud Architecture Basics' },
        { id: 'ibm-h2', name: 'Complex SQL Queries' }
      ]
    }
  },
  {
    name: 'JPMorgan',
    domain: 'jpmorganchase.com',
    topics: {
      Easy: [
        { id: 'jpm-e1', name: 'Basic Math' },
        { id: 'jpm-e2', name: 'String Manipulation' },
        { id: 'jpm-e3', name: 'Logical Reasoning' }
      ],
      Medium: [
        { id: 'jpm-m1', name: 'API Design' },
        { id: 'jpm-m2', name: 'Concurrency' },
        { id: 'jpm-m3', name: 'Financial Tech Basics' }
      ],
      Hard: [
        { id: 'jpm-h1', name: 'Low Latency Systems' },
        { id: 'jpm-h2', name: 'Security & Encryption' }
      ]
    }
  }
];

const evergreenJobs = [
  {
    title: "Artificial Intelligence Engineer",
    icon: "Brain",
    color: "#8b5cf6",
    roadmap: ["Learn Python", "Data structures", "Machine learning", "Deep learning (PyTorch/TensorFlow)", "Build AI projects", "Specialize in LLMs or computer vision"]
  },
  {
    title: "Data Scientist",
    icon: "Database",
    color: "#3b82f6",
    roadmap: ["Python or R", "Statistics", "SQL", "Data visualization", "Machine learning", "Real-world datasets and Kaggle projects"]
  },
  {
    title: "Cybersecurity Analyst",
    icon: "Shield",
    color: "#ef4444",
    roadmap: ["Networking basics", "Linux", "Security fundamentals", "Ethical hacking basics", "Certifications (CompTIA Security+, CEH)", "Practice labs"]
  },
  {
    title: "Cloud Engineer",
    icon: "Cloud",
    color: "#0ea5e9",
    roadmap: ["Basics of networking", "Linux", "AWS/Azure/GCP fundamentals", "DevOps tools", "Deploy cloud projects", "Certification"]
  },
  {
    title: "Full Stack Developer",
    icon: "Code",
    color: "#10b981",
    roadmap: ["HTML, CSS, JavaScript", "Frontend framework (React)", "Backend (Node/Django)", "Databases", "Build full projects"]
  },
  {
    title: "DevOps Engineer",
    icon: "Cpu",
    color: "#f59e0b",
    roadmap: ["Linux", "Git", "CI/CD pipelines", "Docker", "Kubernetes", "Cloud platforms", "Automation scripting"]
  },
  {
    title: "AI Product Manager",
    icon: "Target",
    color: "#ec4899",
    roadmap: ["Basic programming awareness", "Product management skills", "AI fundamentals", "Analytics", "Work on AI-driven product case studies"]
  },
  {
    title: "Robotics Engineer",
    icon: "Cpu",
    color: "#6366f1",
    roadmap: ["Physics + math", "C++/Python", "Embedded systems", "Control systems", "ROS (Robot Operating System)", "Robotics projects"]
  },
  {
    title: "Blockchain Developer",
    icon: "Database",
    color: "#eab308",
    roadmap: ["JavaScript/Solidity", "Smart contracts", "Ethereum basics", "DApps development", "Security of blockchain systems"]
  },
  {
    title: "UI/UX Designer",
    icon: "PenTool",
    color: "#f43f5e",
    roadmap: ["Design basics", "Figma/Adobe XD", "User research", "Prototyping", "Portfolio of real app designs", "Usability testing"]
  },
  {
    title: "Renewable Energy Engineer",
    icon: "Zap",
    color: "#22c55e",
    roadmap: ["Electrical engineering basics", "Solar/wind systems", "Energy storage tech", "Sustainability studies", "Project internships"]
  },
  {
    title: "Bioinformatics Scientist",
    icon: "Activity",
    color: "#14b8a6",
    roadmap: ["Biology basics", "Python", "Data analysis", "Genetics", "Machine learning for biology", "Research projects"]
  },
  {
    title: "AI Healthcare Specialist",
    icon: "Activity",
    color: "#06b6d4",
    roadmap: ["Biology/medicine basics", "Data science", "AI in healthcare tools", "Medical datasets", "Regulatory knowledge"]
  },
  {
    title: "Semiconductor Engineer",
    icon: "Cpu",
    color: "#8b5cf6",
    roadmap: ["Electronics fundamentals", "VLSI design", "Chip design tools", "Fabrication processes", "Advanced microelectronics"]
  },
  {
    title: "Prompt Engineer / AI Automation",
    icon: "Brain",
    color: "#f97316",
    roadmap: ["Learn AI tools", "NLP basics", "Automation tools (Zapier, APIs)", "LLM usage", "Workflow optimization projects"]
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB...");

    await CompanyTopic.deleteMany({});
    await EvergreenJob.deleteMany({});
    
    await CompanyTopic.insertMany(companiesData);
    console.log("Seeded companies");
    
    await EvergreenJob.insertMany(evergreenJobs);
    console.log("Seeded jobs");

    console.log("Seeding complete!");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seedData();
