export interface SyllabusModule {
  title: string;
  topics: string[];
}

export interface Project {
  title: string;
  description: string;
}

export interface PricingDetail {
  price: number;
  originalPrice: number;
  discount: string;
  features: string[];
}

export interface Course {
  id: string;
  title: string;
  domain: string;
  duration: string;
  modulesCount: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviews: number;
  description: string;
  whyChoose: string[];
  skills: string[];
  syllabus: SyllabusModule[];
  projects: Project[];
  pricing: {
    "self-paced": PricingDetail;
    "mentor-led": PricingDetail;
    offline: PricingDetail;
    "one-on-one": PricingDetail;
  };
}

export const domains = [
  { id: "cse", name: "CSE" },
  { id: "mechanical", name: "MECHANICAL" },
  { id: "civil", name: "CIVIL" },
  { id: "ece-eee", name: "ECE & EEE" },
  { id: "management", name: "MANAGEMENT" },
  { id: "bio-science", name: "BIO SCIENCE" },
];

export const allCourses: Course[] = [
  {
    id: "data-science",
    title: "Data Science",
    domain: "CSE",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.7,
    reviews: 258,
    description:
      "In the age of big data, data science has emerged as a powerful discipline that empowers organizations to derive valuable insights and make informed decisions from vast and complex datasets. By leveraging a combination of statistical analysis, machine learning, and domain expertise, data scientists uncover patterns, trends, and relationships hidden within data, driving innovation and competitive advantage across industries.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Python",
      "Pandas & NumPy",
      "Statistical Analysis",
      "SQL Database",
      "Data Visualization",
      "Scikit-Learn",
    ],
    syllabus: [
      {
        title: "Module 1: Foundations of Data Science & Python",
        topics: [
          "Python programming essentials for data science",
          "Working with Pandas, NumPy, and basic data munging",
          "Data visualization with Matplotlib and Seaborn",
        ],
      },
      {
        title: "Module 2: Applied Statistics & Machine Learning",
        topics: [
          "Probability theory and statistical hypothesis testing",
          "Supervised learning models: Regressions and Classifications",
          "Model evaluation metrics and cross-validation",
        ],
      },
    ],
    projects: [
      {
        title: "Predictive Analytics for Customer Churn",
        description:
          "Build and deploy a supervised classification pipeline in Python to identify customer churn markers using real-world telecom datasets.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    domain: "CSE",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.9,
    reviews: 167,
    description:
      "In today's interconnected world, cybersecurity plays a pivotal role in safeguarding our digital infrastructure, personal information, and organizational assets from a myriad of cyber threats. As technology continues to advance, so do the methods and sophistication of cyber attackers, making cybersecurity more critical than ever before.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Network Security",
      "Penetration Testing",
      "Cryptography",
      "Linux Admin",
      "Firewalls & VPNs",
      "OWASP Top 10",
    ],
    syllabus: [
      {
        title: "Module 1: Network Protocols & Security Essentials",
        topics: [
          "Fundamentals of TCP/IP security and cryptography",
          "Configuring firewalls, IDSs, and secure remote VPN access",
          "Linux shell essentials and permission management",
        ],
      },
      {
        title: "Module 2: Penetration Testing & Vulnerability Audit",
        topics: [
          "Vulnerability assessment and standard scanner tools",
          "Web application threats matching OWASP guidelines",
          "Security incident reporting and threat management",
        ],
      },
    ],
    projects: [
      {
        title: "Enterprise Firewall Configuration & Audit",
        description:
          "Design a secure network zone topology with DMZ, configuring multi-layered firewall rules and intrusion detection alerts.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "machine-learning-python",
    title: "Machine Learning with Python",
    domain: "CSE",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.6,
    reviews: 168,
    description:
      "Machine learning is a subfield of artificial intelligence (AI) that focuses on developing algorithms and techniques that enable computers to learn from data and make predictions or decisions without being explicitly programmed. Python, with its extensive libraries and ease of use, has become one of the most popular programming languages for machine learning.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Python ML Stack",
      "Supervised Learning",
      "Unsupervised Clustering",
      "Neural Networks",
      "Pandas",
      "Model Tuning",
    ],
    syllabus: [
      {
        title: "Module 1: Algorithms & Library Essentials",
        topics: [
          "Data preprocessing, scaling, and feature engineering in Python",
          "Linear/Logistic Regression and Decision Tree implementations",
          "Clustering algorithms: K-Means and Hierarchical Models",
        ],
      },
      {
        title: "Module 2: Advanced Tuning & Deployment",
        topics: [
          "Hyperparameter optimization (GridSearch, RandomSearch)",
          "Introduction to Neural Networks and Deep Learning basics",
          "Model serialization and local deployment endpoints",
        ],
      },
    ],
    projects: [
      {
        title: "Real Estate Housing Price Estimation Model",
        description:
          "Design an end-to-end regression model with Scikit-learn to estimate property pricing using feature selection and cross-validation.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "artificial-intelligence",
    title: "AI (Artificial Intelligence)",
    domain: "CSE",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.7,
    reviews: 200,
    description:
      "Artificial Intelligence (AI) has rapidly emerged as a transformative force across industries, revolutionizing the way we live, work, and interact. With its ability to analyze vast amounts of data, learn from patterns, and make predictions, AI is reshaping traditional processes and unlocking unprecedented opportunities for innovation.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Deep Learning",
      "TensorFlow / PyTorch",
      "Natural Language Processing",
      "Computer Vision",
      "Neural Networks",
      "Generative AI",
    ],
    syllabus: [
      {
        title: "Module 1: Deep Neural Networks",
        topics: [
          "Multi-layer Perceptron (MLP) architectures and backpropagation",
          "Convolutional Neural Networks (CNNs) for image detection",
          "Recurrent Neural Networks (RNNs) for sequence modeling",
        ],
      },
      {
        title: "Module 2: Modern AI and NLP Frameworks",
        topics: [
          "Natural Language Processing and Sentiment Analysis systems",
          "Introduction to Transformer architectures and Large Language Models",
          "Model optimization for resource-constrained client applications",
        ],
      },
    ],
    projects: [
      {
        title: "Autonomous Object Classification Pipeline",
        description:
          "Construct a CNN system utilizing TensorFlow to accurately categorize real-world image datasets, achieving 90%+ verification metrics.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    domain: "CSE",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.8,
    reviews: 217,
    description:
      "In a world where cyber threats pose significant risks to individuals, businesses, and governments, ethical hacking has emerged as a crucial practice for identifying and mitigating vulnerabilities in computer systems and networks. Ethical hackers, also known as white-hat hackers, use their expertise and skills to uncover security weaknesses before malicious attackers can exploit them, thereby enhancing the overall security posture of organizations.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Kali Linux",
      "Metasploit",
      "Vulnerability Scanning",
      "Network Sniffing",
      "Wireless Security",
      "Privilege Escalation",
    ],
    syllabus: [
      {
        title: "Module 1: Information Gathering & Reconnaissance",
        topics: [
          "Footprinting, scanning networks, and port analysis",
          "Using vulnerability assessment tools (Nessus, Nmap)",
          "System hacking methodologies and password security audits",
        ],
      },
      {
        title: "Module 2: Web & Wireless Network Attack Auditing",
        topics: [
          "OWASP web vulnerabilities: SQLi and XSS audits",
          "Wireless network security analysis and session hijacking mitigation",
          "Legal frameworks, reporting methodologies, and risk mitigation",
        ],
      },
    ],
    projects: [
      {
        title: "Penetration Testing of Mock Local Server",
        description:
          "Perform a complete network vulnerability audit on a simulated corporate network, documenting and proposing patches for weaknesses.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "java-spring-boot",
    title: "Java & Java Spring Boot",
    domain: "CSE",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.6,
    reviews: 236,
    description:
      "Java is a versatile, object-oriented programming language known for its simplicity, portability, and robustness. It has been a cornerstone of enterprise software development for decades, powering a wide range of applications from web and mobile to desktop and enterprise systems.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Java OOP",
      "Spring Boot",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
    ],
    syllabus: [
      {
        title: "Module 1: Java Programming Core",
        topics: [
          "Java language syntax, OOP design principles, and packaging",
          "Java Collections framework and Exception Handling",
          "Multi-threading, streams, and file I/O operations",
        ],
      },
      {
        title: "Module 2: Enterprise Web Apps with Spring Boot",
        topics: [
          "Spring Core, Dependency Injection, and IoC container",
          "Building REST controllers and API routing",
          "Spring Data JPA, Hibernate ORM, and database configurations",
        ],
      },
    ],
    projects: [
      {
        title: "RESTful E-Commerce Microservice API",
        description:
          "Design a Spring Boot REST API database backend complete with product categories, user orders database, and mock payment gateway endpoints.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "cpp-programming",
    title: "C++ Programming",
    domain: "CSE",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Beginner",
    rating: 4.9,
    reviews: 190,
    description:
      "C++ is a powerful and versatile programming language known for its efficiency, performance, and wide range of applications. Developed by Bjarne Stroustrup in the early 1980s, C++ is an extension of the C programming language, with added support for object-oriented programming (OOP) features.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "C++ Basics",
      "OOP Principles",
      "Memory Management",
      "Pointers",
      "STL Library",
      "Data Structures",
    ],
    syllabus: [
      {
        title: "Module 1: Syntax & Core OOP Features",
        topics: [
          "Control flows, standard variables, and custom functions",
          "Pointers, references, and memory allocation layouts",
          "Classes, inheritance, encapsulation, and polymorphism",
        ],
      },
      {
        title: "Module 2: Advanced Templates & STL Containers",
        topics: [
          "Templates and generic programming architectures",
          "Standard Template Library (STL) vectors, lists, maps",
          "File handling, stream buffers, and core data structure arrays",
        ],
      },
    ],
    projects: [
      {
        title: "Custom Database Directory Manager",
        description:
          "Implement a high-performance C++ console database tool using object-oriented architecture, custom templates, and file storage.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "automation-testing",
    title: "Automation Testing",
    domain: "CSE",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.6,
    reviews: 96,
    description:
      "Automation testing is a software testing technique that involves using specialized tools and scripts to automate the execution of test cases, reducing manual effort and increasing testing efficiency. It plays a crucial role in modern software development processes by accelerating the testing cycle, improving test coverage, and ensuring the quality and reliability of software applications.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Selenium WebDriver",
      "TestNG / JUnit",
      "Java for Testing",
      "Page Object Model",
      "API Testing (Postman)",
      "Jenkins CI/CD",
    ],
    syllabus: [
      {
        title: "Module 1: Test Planning & Scripting Basics",
        topics: [
          "Manual testing methodologies vs automation goals",
          "Selenium WebDriver architecture and element locator strategies",
          "Writing modular scripts using Java/Testing frameworks",
        ],
      },
      {
        title: "Module 2: Framework Design & Pipelines",
        topics: [
          "Page Object Model (POM) pattern implementation",
          "Data-driven testing layouts with Excel configurations",
          "CI/CD integration for regular automation execution",
        ],
      },
    ],
    projects: [
      {
        title: "Cross-Browser Regression Testing Suite",
        description:
          "Design and implement a Selenium Page Object Model suite to execute robust regression suites on a mock retail site.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    domain: "CSE",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.6,
    reviews: 101,
    description:
      "Full stack development refers to the practice of building web applications that encompass both the frontend (client-side) and backend (server-side) components, along with the associated databases and infrastructure. A full stack developer is proficient in multiple programming languages, frameworks, and technologies, allowing them to work on all aspects of the application development process, from designing user interfaces to managing server infrastructure.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS & Git",
    ],
    syllabus: [
      {
        title: "Module 1: Client-Side Interfaces (React)",
        topics: [
          "HTML5, CSS3, ES6+ Javascript foundations",
          "React components, state hooks, and routing",
          "Tailwind CSS styling configurations",
        ],
      },
      {
        title: "Module 2: Server-Side Frameworks & Databases",
        topics: [
          "Node.js runtime, Express routing pipelines",
          "RESTful API architecture designs",
          "MongoDB schema database structures and deployment",
        ],
      },
    ],
    projects: [
      {
        title: "Responsive Real-time Collaborative Task Board",
        description:
          "Assemble a full-stack MERN application featuring secure JWT credentials, dynamic dashboards, and drag-and-drop operations.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "robotics",
    title: "Robotics",
    domain: "MECHANICAL",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.7,
    reviews: 209,
    description:
      "Robotics is an interdisciplinary field that combines engineering, computer science, and other disciplines to design, construct, operate, and use robots. A robot is a mechanical device that can perform tasks autonomously or semi-autonomously, often with sensors, actuators, and a control system. Robotics encompasses a wide range of applications, from industrial automation and manufacturing to healthcare, agriculture, space exploration, and beyond.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Kinematics",
      "ROS Basics",
      "Actuators & Sensors",
      "Microcontroller Dev",
      "PID Controller",
      "Autonomous Navigation",
    ],
    syllabus: [
      {
        title: "Module 1: Robot Kinematics & Mechanics",
        topics: [
          "Degrees of freedom, links, and coordinate transforms",
          "Forward and inverse kinematic modeling math",
          "Selecting actuators, servos, and motor controllers",
        ],
      },
      {
        title: "Module 2: Sensor Integration & Control Loops",
        topics: [
          "Ultrasonic, LiDAR, and IMU sensor interfacing",
          "PID control logic for orientation and pathing",
          "ROS node topologies and telemetry frameworks",
        ],
      },
    ],
    projects: [
      {
        title: "Obstacle Avoidance Rover Assembly",
        description:
          "Design, build, and calibrate a 4WD rover integrated with distance sensors and autonomous steering pathfinding logic.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "hybrid-electric-vehicles",
    title: "Hybrid Electric Vehicles",
    domain: "MECHANICAL",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.8,
    reviews: 128,
    description:
      "Hybrid electric vehicles (HEVs) represent a significant advancement in automotive technology, combining the benefits of internal combustion engines with electric propulsion systems to improve fuel efficiency, reduce emissions, and enhance overall vehicle performance. HEVs utilize a combination of gasoline or diesel engines and electric motors, along with onboard batteries and sophisticated control systems, to optimize power delivery and energy usage.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "HEV Architectures",
      "Electric Powertrains",
      "Lithium Battery Systems",
      "Regenerative Braking",
      "MATLAB Simulation",
      "Motor Control",
    ],
    syllabus: [
      {
        title: "Module 1: Powertrain and Energy Architecture",
        topics: [
          "Series, parallel, and power-split vehicle layouts",
          "Electric traction motors (PMSM, Induction)",
          "Battery Chemistry and Battery Management Systems (BMS) fundamentals",
        ],
      },
      {
        title: "Module 2: Control Strategies & Optimization",
        topics: [
          "Energy management systems and torque split calculations",
          "Regenerative braking energy recovery modeling",
          "Simulation check models on vehicle cycle layouts",
        ],
      },
    ],
    projects: [
      {
        title: "HEV Powertrain Simulation Model",
        description:
          "Build a MATLAB/Simulink vehicle simulation model to compute fuel efficiency improvement metrics under standard driving cycles.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "autocad-mechanical",
    title: "AutoCAD (SolidWorks, NX Unigraphics)",
    domain: "MECHANICAL",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Beginner",
    rating: 4.8,
    reviews: 113,
    description:
      "AutoCAD, developed by Autodesk, is a computer-aided design (CAD) software widely used in various industries for creating precise 2D and 3D drawings, models, and technical documentation. Originally released in 1982, AutoCAD has evolved into one of the most powerful and versatile CAD tools available, offering a wide range of features and capabilities to architects, engineers, designers, and drafters. The program also integrates key concepts of SOLID WORKS and NX UNI GRAPHICS.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "2D Drafting",
      "3D Solid Modeling",
      "GD&T Standards",
      "SolidWorks Surfacing",
      "NX Assembly Layouts",
      "Sheet Metal Design",
    ],
    syllabus: [
      {
        title: "Module 1: 2D Engineering Blueprints in AutoCAD",
        topics: [
          "Coordinate frameworks, basic geometries, and layers",
          "Dimension styles and ASME/ISO drafting standards",
          "Isometric layouts and details mapping",
        ],
      },
      {
        title: "Module 2: SolidWorks & NX 3D Design",
        topics: [
          "Creating parts using features: extrude, revolve, loft",
          "Assembly constraints and interference check analyses",
          "Bill of Materials (BOM) generation and sheet metal layouts",
        ],
      },
    ],
    projects: [
      {
        title: "Engine Crankshaft Assembly Drawing & Model",
        description:
          "Draft a 2D layout in AutoCAD and build a parametric 3D assembly in SolidWorks complete with detailed component tolerances.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "3d-design-catia",
    title: "3d Design with Catia",
    domain: "CIVIL",
    duration: "12 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.8,
    reviews: 141,
    description:
      "CATIA (Computer-Aided Three-dimensional Interactive Application) is a powerful 3D computer-aided design (CAD) software developed by Dassault Systèmes. It is widely used in various industries, including aerospace, automotive, manufacturing, and engineering, for designing complex 3D models, assemblies, and mechanical systems. CATIA offers a comprehensive suite of tools and capabilities for product design, simulation, analysis, and manufacturing planning.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Parametric Modeling",
      "Surface design",
      "Drafting Layouts",
      "CATIA Assembly",
      "Aerospace / Automotive Design",
      "Product Lifecycle Management",
    ],
    syllabus: [
      {
        title: "Module 1: CATIA Part Design & Wireframes",
        topics: [
          "Constrained sketches, modeling solid bodies, features",
          "Reference elements and boolean operation trees",
          "ASME standard drawings and annotations setup",
        ],
      },
      {
        title: "Module 2: Generative Shape Surfacing",
        topics: [
          "Advanced surface shapes: sweeps, blends, and multi-sections",
          "Analyzing surface curvatures and styling splits",
          "Digital mockups (DMU) and kinematics simulation check",
        ],
      },
    ],
    projects: [
      {
        title: "Structural Fuselage Assembly Model",
        description:
          "Develop a highly parameterized 3D assembly profile of a structural fuselage frame section using advanced surface geometries.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "vlsi",
    title: "VLSI",
    domain: "ECE & EEE",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.9,
    reviews: 179,
    description:
      "VLSI, or Very Large Scale Integration, is a field of electronics engineering that deals with the design, manufacturing, and testing of integrated circuits (ICs) containing millions or even billions of transistors on a single chip. VLSI technology has revolutionized the electronics industry, enabling the development of powerful, compact, and energy-efficient electronic devices ranging from microprocessors and memory chips to smartphones and IoT devices.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Verilog HDL",
      "CMOS Circuits",
      "ASIC Design Flow",
      "Logic Synthesis",
      "FPGA Architecture",
      "SystemVerilog",
    ],
    syllabus: [
      {
        title: "Module 1: HDL Programming & Digital Logic",
        topics: [
          "Combinational and sequential circuits in Verilog",
          "State machine (FSM) structures and testbench design",
          "FPGA architectures and programming layouts",
        ],
      },
      {
        title: "Module 2: Physical Design & CMOS Technology",
        topics: [
          "CMOS inverter dynamics and power optimizations",
          "Layout design guidelines, DRC (Design Rule Checks)",
          "Logic synthesis pipelines and timing checking (STA)",
        ],
      },
    ],
    projects: [
      {
        title: "16-Bit RISC Processor Core Design",
        description:
          "Write synthesisable Verilog HDL code for a 16-Bit RISC processor, verifying instructions via model testbench environments.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "blockchain",
    title: "BLOCKCHAIN",
    domain: "ECE & EEE",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.7,
    reviews: 132,
    description:
      "Blockchain technology is a revolutionary innovation that has the potential to transform various industries by providing a decentralized, secure, and transparent way of recording and verifying transactions. Originally developed as the underlying technology for the cryptocurrency Bitcoin, blockchain has evolved into a versatile tool with applications beyond digital currencies. At its core, blockchain is a distributed ledger system that enables peer-to-peer transactions without the need for intermediaries, such as banks or financial institutions.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Cryptography",
      "Ethereum & Solidity",
      "Smart Contracts",
      "Web3.js API",
      "Consensus Algorithms",
      "Hyperledger Architecture",
    ],
    syllabus: [
      {
        title: "Module 1: Cryptography & Decentralization Core",
        topics: [
          "Hashing models, public/private keys, and digital signatures",
          "Consensus algorithms: Proof of Work vs Proof of Stake",
          "Blockchain networks structure: Bitcoin and Ethereum",
        ],
      },
      {
        title: "Module 2: Smart Contract Dev with Solidity",
        topics: [
          "Writing secure smart contracts in Solidity",
          "Deploying contracts on testnets with Truffle/Hardhat",
          "Building frontends connected via Web3.js / Ethers.js APIs",
        ],
      },
    ],
    projects: [
      {
        title: "Decentralized Escrow Verification Portal",
        description:
          "Design and publish a Solidity smart contract and React dashboard to manage secure peer-to-peer escrow payments.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "embedded-system",
    title: "EMBEDDED SYSTEM",
    domain: "ECE & EEE",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.9,
    reviews: 146,
    description:
      "Embedded systems are specialized computing systems designed to perform specific functions within larger systems or devices. Unlike general-purpose computers, which are designed for a wide range of tasks, embedded systems are optimized for efficiency, reliability, and real-time operation in constrained environments. They are commonly found in a diverse array of applications, including consumer electronics, automotive systems, industrial automation, medical devices, and IoT (Internet of Things) devices.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Embedded C",
      "STM32 Microcontrollers",
      "I2C/SPI/UART",
      "RTOS Frameworks",
      "ADC/DAC Interfacing",
      "Circuit Debugging",
    ],
    syllabus: [
      {
        title: "Module 1: C Programming & Peripheral Controls",
        topics: [
          "Embedded C code frameworks and register configurations",
          "Interfacing GPIO, timers, interrupts, and sensors",
          "Serial data protocols: UART, SPI, and I2C configs",
        ],
      },
      {
        title: "Module 2: RTOS Core & STM32 Systems",
        topics: [
          "Task management and semaphores in FreeRTOS",
          "ADC conversions and DMA channels configure models",
          "Low-power optimizations and board validation",
        ],
      },
    ],
    projects: [
      {
        title: "RTOS-Based Indoor Quality Analyzer",
        description:
          "Interface gas sensors with an STM32 board under FreeRTOS, managing sensor tasks, scheduling data logs, and showing indicators on an LCD.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "cloud-computing-network",
    title: "CLOUD COMPUTING & NETWORK FUNDAMENTALS",
    domain: "ECE & EEE",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Beginner",
    rating: 4.9,
    reviews: 189,
    description:
      "Cloud computing and network fundamentals are two pillars of modern technology infrastructure, revolutionizing the way businesses and individuals access, store, and process data. Cloud computing enables users to access computing resources and services over the internet, while network fundamentals form the backbone of connectivity, enabling data transmission and communication between devices and systems.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "IPv4 / IPv6 Subnetting",
      "Routing & Switching",
      "AWS Cloud Services",
      "Azure Foundations",
      "Network Security",
      "Virtualization",
    ],
    syllabus: [
      {
        title: "Module 1: Network Architecture Core",
        topics: [
          "OSI layer functions and TCP/IP protocol suite",
          "Subnet layouts, CIDR maps, and router routing tables",
          "VLANs, DNS, DHCP, and secure remote VPN configurations",
        ],
      },
      {
        title: "Module 2: Cloud Deployments & Virtualizations",
        topics: [
          "Computing resource provisioning (EC2, Virtual Machines)",
          "Cloud databases, object storage, security configurations",
          "Virtual networks setup and load balancers configure models",
        ],
      },
    ],
    projects: [
      {
        title: "Hybrid Cloud Network Infrastructure",
        description:
          "Design a secure network architecture mapping local subnet routes with AWS/Azure public VPC resources, verifying traffic layouts.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "hr-management",
    title: "HR (Human Resources)",
    domain: "MANAGEMENT",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Beginner",
    rating: 4.8,
    reviews: 244,
    description:
      "Human Resources (HR) refers to the fundamental understanding of the field that deals with managing people within an organization. HR is essential for ensuring that an organization's human capital is effectively utilized, motivated, and developed to achieve its strategic goals.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Talent Acquisition",
      "Employee Relations",
      "Payroll & Compliance",
      "Performance Auditing",
      "Conflict Resolution",
      "HR Tools (SAP/Workday)",
    ],
    syllabus: [
      {
        title: "Module 1: Recruitment & Talent Acquisition",
        topics: [
          "Job analysis, candidate sourcing models, screening processes",
          "Interviewing techniques and evaluation frameworks",
          "Onboarding programs and employee experience strategies",
        ],
      },
      {
        title: "Module 2: Compensation, Compliance & Relations",
        topics: [
          "Wage structures, benefits planning, and legal frameworks",
          "Performance management and appraisal systems",
          "Conflict resolution, labor relations, and organizational culture",
        ],
      },
    ],
    projects: [
      {
        title: "Strategic Performance Appraisal Grid",
        description:
          "Design a comprehensive KPI appraisal framework and employee relations policy manual for a rapidly scaling startup company.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "finance",
    title: "FINANCE",
    domain: "MANAGEMENT",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.6,
    reviews: 182,
    description:
      "Finance encompasses understanding the principles and practices involved in managing money, investments, and other financial assets within an organization or individual context. Finance is crucial for making informed decisions regarding the allocation of resources, maximizing profitability, and mitigating risks.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Financial Analysis",
      "Corporate Valuation",
      "Capital Budgeting",
      "Risk Management",
      "Portfolio Management",
      "Excel Modeling",
    ],
    syllabus: [
      {
        title: "Module 1: Accounting Core & Statement Analysis",
        topics: [
          "Income Statements, Balance Sheets, and Cash Flow calculations",
          "Financial ratio analysis and profitability tracking",
          "Working capital management and cash flow forecasting",
        ],
      },
      {
        title: "Module 2: Corporate Valuation & Investments",
        topics: [
          "Discounted Cash Flow (DCF) modeling and metrics",
          "Capital budgeting: NPV, IRR, and payback calculations",
          "Risk assessment methods and capital asset pricing model (CAPM)",
        ],
      },
    ],
    projects: [
      {
        title: "Equity Valuation & Financial Model",
        description:
          "Build a dynamic DCF financial valuation model in Excel for a publicly listed enterprise, forecasting revenues and computing fair value shares.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "digital-marketing-mgmt",
    title: "DIGITAL MARKETING",
    domain: "MANAGEMENT",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Beginner",
    rating: 4.8,
    reviews: 102,
    description:
      "Digital Marketing entails understanding the strategies and techniques used to promote products, services, or brands through digital channels. In today's highly connected world, digital marketing plays a crucial role in reaching and engaging target audiences, driving brand awareness, and ultimately, achieving business objectives.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "SEO Strategies",
      "Google Analytics 4",
      "Meta Ads Manager",
      "Content Copywriting",
      "Email Automation",
      "Conversion Optimization",
    ],
    syllabus: [
      {
        title: "Module 1: Search Engine Optimization (SEO) & GA4",
        topics: [
          "On-page, off-page keyword mapping and technical audits",
          "Setting up and analyzing reports in Google Analytics 4",
          "Content marketing strategies and copywriting formats",
        ],
      },
      {
        title: "Module 2: Paid Ad Campaigns & Lead Generation",
        topics: [
          "Managing budgets in Meta Ads Manager and Google Ads",
          "Designing target segments and landing pages",
          "Email marketing automation and funnel conversion optimization",
        ],
      },
    ],
    projects: [
      {
        title: "MOCK Facebook & Google Lead Campaign",
        description:
          "Design and outline a comprehensive digital marketing campaign budget, complete with search keywords and target ad copy sets.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "business-analytics",
    title: "BUSINESS ANALYTICS",
    domain: "MANAGEMENT",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.8,
    reviews: 84,
    description:
      "Business Analytics involves understanding the use of data, statistical analysis, and quantitative methods to drive informed business decision-making and improve organizational performance. Business analytics leverages data from various sources to uncover insights, trends, and patterns that can help businesses optimize processes, identify opportunities, and solve complex problems.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Data Querying (SQL)",
      "Power BI / Tableau",
      "Predictive Analytics",
      "Excel dashboards",
      "A/B Testing",
      "Descriptive Stats",
    ],
    syllabus: [
      {
        title: "Module 1: SQL Queries & BI Dashboard Design",
        topics: [
          "Relational databases and joining tables in SQL",
          "Designing interactive reporting dashboards in Power BI",
          "Descriptive statistics and data validation techniques",
        ],
      },
      {
        title: "Module 2: Statistical Modeling & Predictions",
        topics: [
          "Correlation and linear regression forecasting in business",
          "A/B testing designs and performance tracking",
          "Prescriptive analytics models for operations optimization",
        ],
      },
    ],
    projects: [
      {
        title: "Retail Sales Performance Dashboard",
        description:
          "Create an interactive dashboard in Power BI visualizing sales performance indicators, identifying key market segments.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "stock-marketing",
    title: "STOCK MARKETING",
    domain: "MANAGEMENT",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Intermediate",
    rating: 4.8,
    reviews: 189,
    description:
      "Stock Market, also known as equity market or share market, involves understanding the buying and selling of shares (or ownership stakes) in publicly traded companies. The stock market serves as a platform where investors can trade securities, such as stocks, bonds, and derivatives, enabling companies to raise capital and investors to participate in the growth of businesses.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Technical Analysis",
      "Fundamental Analysis",
      "Risk-Reward Management",
      "Option Strategies",
      "Chart Patterns",
      "Portfolio Allocation",
    ],
    syllabus: [
      {
        title: "Module 1: Technical Indicators & Chart Patterns",
        topics: [
          "Candlestick charts, supports, resistances, trendlines",
          "RSI, MACD, Moving Averages configurations",
          "Trading plan design and risk-reward ratio parameters",
        ],
      },
      {
        title: "Module 2: Fundamental Valuation & Derivatives",
        topics: [
          "Analyzing company balance sheets, P/E, D/E ratios",
          "Option trading essentials: Calls, Puts, hedging",
          "Portfolio management rules and risk-diversification strategies",
        ],
      },
    ],
    projects: [
      {
        title: "Technical Trading & Portfolio Analysis",
        description:
          "Design a structured trading plan using multiple technical indicators, simulating a balanced equity portfolio tracking.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "nano-science",
    title: "NANO SCIENCE",
    domain: "BIO SCIENCE",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.8,
    reviews: 102,
    description:
      "Nanoscience involves understanding the principles, properties, and applications of materials and structures at the nanoscale. Nanoscience explores phenomena and behaviors that emerge when materials are manipulated and engineered at dimensions typically ranging from 1 to 100 nanometers (nm), where unique properties often arise due to quantum effects and increased surface area-to-volume ratios.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "Nanomaterials",
      "Nanotechnology",
      "Material Characterization",
      "Scanning Electron Microscopy",
      "Quantum Effects",
      "Nanobiotech",
    ],
    syllabus: [
      {
        title: "Module 1: Physics and Chemistry at Nanoscale",
        topics: [
          "Quantum confinement effects and surface-to-volume dynamics",
          "Synthesis of nanomaterials (top-down vs bottom-up)",
          "Characterization tools: SEM, TEM, and XRD methods",
        ],
      },
      {
        title: "Module 2: Nanobiotechnology & Applications",
        topics: [
          "Nanoparticle drug delivery vehicles, bio-compatibility",
          "Nanobiosensors for molecular diagnostics",
          "Carbon nanotubes and graphene application structures",
        ],
      },
    ],
    projects: [
      {
        title: "Nanoparticle Drug Delivery Simulation",
        description:
          "Analyze and model nanoparticle transport kinetics in biological target cells, optimizing delivery parameters.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
  {
    id: "genetic-engineering",
    title: "GENETIC ENGINEERING",
    domain: "BIO SCIENCE",
    duration: "10 Weeks",
    modulesCount: 8,
    difficulty: "Advanced",
    rating: 4.6,
    reviews: 245,
    description:
      "Genetic Engineering involves the manipulation of an organism's genetic material to achieve specific outcomes, such as introducing new traits, enhancing existing characteristics, or developing novel functionalities. Genetic engineering techniques enable scientists to modify DNA sequences, genes, and genomes with precision, offering profound implications for various fields, including medicine, agriculture, biotechnology, and environmental science.",
    whyChoose: [
      "Curriculum designed by active corporate specialists.",
      "Practical focus with real capstone projects and standard tools.",
      "100% placement support and career counselor checkups.",
    ],
    skills: [
      "CRISPR-Cas9",
      "Recombinant DNA",
      "Gene Cloning",
      "Gel Electrophoresis",
      "PCR Amplification",
      "Biosafety Standards",
    ],
    syllabus: [
      {
        title: "Module 1: Molecular Tools & Recombinant DNA",
        topics: [
          "Restriction enzymes, vectors, ligations, and gene cloning",
          "PCR amplification mechanisms and gel electrophoresis verification",
          "DNA sequencing methodologies (Sanger and NGS) fundamentals",
        ],
      },
      {
        title: "Module 2: CRISPR Technology & Editing Systems",
        topics: [
          "CRISPR-Cas9 mechanisms and guide RNA design layouts",
          "Transgenic plants and animal models engineering",
          "Biosafety compliance, ethical regulations, and clinical paths",
        ],
      },
    ],
    projects: [
      {
        title: "Recombinant Plasmid Construction Blueprint",
        description:
          "Design a guide RNA and construct a target recombinant plasmid mapping diagram for gene knockout in a host cell.",
      },
    ],
    pricing: {
      "self-paced": {
        price: 2100,
        originalPrice: 2900,
        discount: "27% OFF",
        features: [
          "Recorded video materials",
          "Lifetime program access",
          "Community support forum",
          "Vaidik Certification",
        ],
      },
      "mentor-led": {
        price: 3900,
        originalPrice: 5900,
        discount: "33% OFF",
        features: [
          "Live interactive webinars",
          "Doubt-clearing sessions",
          "Resume analysis reviews",
          "Vaidik Certification",
        ],
      },
      offline: {
        price: 11900,
        originalPrice: 14900,
        discount: "20% OFF",
        features: [
          "Physical lab workouts",
          "Direct mentor interaction",
          "Hiring drive connections",
          "Printed Certificate",
        ],
      },
      "one-on-one": {
        price: 27900,
        originalPrice: 34900,
        discount: "20% OFF",
        features: [
          "Personal dedicated guide",
          "Flexible syllabus speeds",
          "Direct portfolio grooming",
          "Fast-track Placement",
        ],
      },
    },
  },
];
